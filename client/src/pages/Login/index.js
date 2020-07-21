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
      console.log(authCheck)
      API.verifyToken(authCheck)
      .then ( res => {
        store.dispatch(addAuth(authCheck))
        API.getUserById(res.data.userData._id)
        .then (user => {
          console.log('userdata', user)
          store.dispatch(addCurrentUser(user.data))
          console.log('state', store.getState())
          API.getAllPets()
          .then ( petRes => {
            store.dispatch(addPets(petRes.data))
            console.log(res)
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
