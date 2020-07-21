import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Modals from '../../components/Modal/index'
import store from '../../utils/store'
import { addCurrentUser, addAuth, addPets } from '../../utils/actions'
import API from '../../utils/API'
import 'materialize-css'
import './style.css'

function Login () {
  const histoy = useHistory()
  const authCheck = localStorage.getItem('oAuth')
  useEffect( () => {
    if (authCheck != null){
      API.verifyToken(authCheck)
      .then ( res => {
        store.dispatch(addAuth(authCheck))
        API.getUserById(res.data.userData._id)
        .then (user => {
          store.dispatch(addCurrentUser(user.data))
          API.getAllPets()
          .then ( petRes => {
            store.dispatch(addPets(petRes.data))
            histoy.push('/match')
          })
        })
      })
    }
  }, [])
  return (
    <div>
      <div class="crossfade">
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
        <figure></figure>
      </div>
      <Modals />
    </div>
  )
}

export default Login
