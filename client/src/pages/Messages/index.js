import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import store from "../../utils/store";
import Conversations from "../../components/Conversations";
import CurrentConversation from "../../components/CurrentConversation";
import { addMatches, addAuth, setCurrentThread } from "../../utils/actions";
import { Container, Row } from "react-materialize";
import "materialize-css";
import "./style.css";

function Messages() {
  let history = useHistory();
  // State from store
  const { currentUser, matches, Auth } = store.getState();

  // UseEffect hook to get matches
  useEffect(() => {
    if (currentUser === undefined) {
      history.push("/");
    } else {
      API.getUserMatches(currentUser._id).then((matches) => {
        store.dispatch(addMatches(matches.data));
      });
    }
  }, []);
  // Check user Auth token, if its not vaild send user to home page
  API.verifyToken(Auth)
    .then((res) => {})
    .catch((err) => {
      store.dispatch(addAuth(undefined));
      history.push("/");
    });

  function handleClick(id) {
    API.getPetByID(id).then((pet) => {
      store.dispatch(setCurrentThread(pet.data));
      history.push("/thread");
    });
  }

  // Function to render matches if there are matches else let user know 'No Matches'
  const renderMatches = () => {
    if (Auth === undefined) {
      history.push("/");
    } else {
      if (matches.length > 0) {
        return (
          <Container className="messages">
            <Row>
              <Conversations />
              <CurrentConversation />
            </Row>
          </Container>
        );
      } else {
        return <h1> No matches </h1>;
      }
    }
  };
  return <>{renderMatches()}</>;
}

export default Messages;
