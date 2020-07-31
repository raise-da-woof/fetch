import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import store from "../../utils/store";
import { addMatches, addAuth, setCurrentThread } from "../../utils/actions";
import {
  Container,
  Row,
  Col,
  Icon,
  Collection,
  CollectionItem,
  Badge
} from "react-materialize";
import "materialize-css";
import './style.css';

function Messages() {
  let history = useHistory();
  // State from store
  const { currentUser, matches, Auth, thread } = store.getState();

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
      API.getPetByID(id).then(pet => {
        store.dispatch(setCurrentThread(pet.data));
      history.push("/thread");
      })
      
    }

  // Function to render matches if there are matches else let user know 'No Matches'
  const renderMatches = () => {
    if (Auth === undefined) {
      history.push("/");
    } else {
      if (matches.length > 0) {
        return (
          <Container>
            <Row>
              <Col s={12}>
                <h1>Messages</h1>
              </Col>
            </Row>
            <Row>
              <Col m={12} s={12}>
                <Collection>
                  {matches.map((match, i) => {
                    return (
                      <CollectionItem className="avatar thread" href="#" key={i} onClick={() => handleClick(match._id)}>
                        <img alt="" className="circle" src={match.image} />
                        <span className="title">{match.name}</span>
                        <p>
                          {match.age} | {match.gender}
                          <br />
                          {match.size} | {match.breed}
                        </p>
                        <a
                          className="secondary-content"
                        >
                          <Badge className="red unread" newIcon>
                            4
                          </Badge>
                        </a>
                      </CollectionItem>
                    );
                  })}
                </Collection>
              </Col>
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
