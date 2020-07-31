import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import store from "../../utils/store";
import { addMatches, addAuth } from "../../utils/actions";
import { Container, Row, Col } from "react-materialize";
import "materialize-css";
import "./style.css";

export default function Thread() {
  let history = useHistory();
  const { currentUser, Auth, thread } = store.getState();
  
  useEffect(() => {
    if (currentUser === undefined) {
      history.push("/");
    } 
  }, []);
  // Check user Auth token, if its not vaild send user to home page
  API.verifyToken(Auth)
    .then((res) => {})
    .catch((err) => {
      store.dispatch(addAuth(undefined));
      history.push("/");
    });

    function renderMatchInfo() {
      return thread.name;
    }
    function renderMessages() {
      API.getMessagesInThread(currentUser.pets[0]._id, thread._id).then(messages => {
        console.log(messages)
      });
    }


  return (
    <Container>
      <Row>
        <Col s={12}>
          <h1>{thread.name}</h1>
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          {renderMessages}
        </Col>
      </Row>
    </Container>
  );
}
