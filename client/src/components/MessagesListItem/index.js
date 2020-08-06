import React, { useState } from "react";
import store from "../../utils/store";
import { Col } from "react-materialize";
import "materialize-css";
import "./style.css";

export default function MessagesListItem({ sender, dateSent, content }) {
  const { currentUser } = store.getState();

  return ( 
    <div className="messages-list-item">
      <h6>{ sender }</h6><span>{ dateSent }</span>
      <br/>
      <p>{ content }</p>
    </div>
  )
}
