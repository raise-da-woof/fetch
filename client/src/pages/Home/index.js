import React, { useEffect } from 'react'
import { Container } from 'react-materialize'
import { useHistory } from 'react-router-dom'
import API from '../../utils/API'
import CheckPet from '../../components/CheckPet'
import store from '../../utils/store'
import { addAuth, addMatches, addPets } from '../../utils/actions'
import 'materialize-css'
import FetchFooter from '../../components/Footer'

function Home () {
  // All State Management
  const { checkAuth, setCheckAuth } = store.getState(false) 
  const { currentUser, Auth, matches, allPets } = store.getState()
  // UseEffect hook to get matches
  if ( allPets.length === 0 ){
    API.getAllPets()
    .then( petsRes => {
      store.dispatch(addPets(petsRes.data))
    })
  }
  let history = useHistory()
  // Check user Auth token, if its not vaild send user to home page
  API.verifyToken(Auth)
  .then( res => {
  }).catch( err => {
    store.dispatch(addAuth(undefined))
    history.push('/')
  })

  return (
    <Container>
      <CheckPet />
    </Container>

  )
}

export default Home
