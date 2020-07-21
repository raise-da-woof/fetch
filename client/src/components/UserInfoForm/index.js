import React, { useState, useEffect, useRef } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import store from '../../utils/store'
import API from '../../utils/API'
import Alerts from '../Alerts/index'
import { addCurrentUser, addAuth, addPets } from '../../utils/actions'
import { TextInput, Button, Modal } from 'react-materialize'
import 'materialize-css'

function UserInfoForm () {
  // State Management
  const { currentUser } = store.getState()
  const pageLoaded = useRef(false)
  const [disableUpdate, setDisableUpdate] = useState(true)
  const [error, setError] = useState({
    type: 'none',
    msg: ''
  })
  const [username, setUsername] = useState(currentUser.username)
  const [email, setEmail] = useState(currentUser.email)

  useEffect(() => {
    if(pageLoaded.current) {
      setDisableUpdate(false);
    } else {
      pageLoaded.current = true;
    }
  }, [username, email]);

  const history = useHistory()
  const updateUser = async e => {
    const user = {
      username,
      email
    }
    setDisableUpdate(true);
    e.preventDefault()
    try {
      const updateUserRes = await API.updateUser(currentUser._id, user)
      store.dispatch(addCurrentUser(updateUserRes.data))
      setError({ ...error, type: 'success' })
      setTimeout(() => {
        setError({ ...error, type: 'none' })
      }, 2000)
    } catch (err) {
      setError({ ...error, type: 'danger' })
      setTimeout(() => {
        setError({ ...error, type: 'none' })
      }, 2000)
    }
  }
  const deleteUser = async e => {
    e.preventDefault()
    try {
      const removeUserRes = await API.removeUser(currentUser._id)
      localStorage.setItem('oAuth', '')
      history.push('/')
    } catch (err) {
    }
  }

  return (
    <>
      <TextInput
        id='TextInput-4'
        label='UserName'
        onChange={e => setUsername(e.target.value)}
        value={username}
      />
      <TextInput
        email
        id='TextInput-4'
        label='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        validate
      />
      <Alerts error={error} />
      <Button
        className="update-btn"
        node='button'
        style={{
          marginRight: '5px'
        }}
        waves='light'
        disabled={disableUpdate}
        onClick={updateUser}
      >
        Update User
      </Button>
      <Modal
        actions={[
          <Button flat modal='close' node='button'>
            Cancel
          </Button>,
          <Button className="delete-btn" node='button' waves='light' onClick={ deleteUser }>
            Delete Account
          </Button>,
        ]}
        bottomSheet={false}
        fixedFooter={false}
        header='Delete Account'
        id='Modal-0'
        open={false}
        options={{
          dismissible: true,
          endingTop: '10%',
          inDuration: 250,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: false,
          startingTop: '4%'
        }}
        trigger={<Button className="delete-btn" node='button' style={{ marginRight: '5px'}} >Delete Account</Button>}
      >
        <p>
          WARNING, by clicking "Delete Account" you will lose all your information and no longer have access to your account.
        </p>
      </Modal>
    </>
  )
}

export default UserInfoForm
