import React, { useState } from "react";
import store from "../../utils/store";
import { Col } from "react-materialize";
import "materialize-css";
import "./style.css";
import MessagesListItem from "../MessagesListItem";

export default function MessagesList() {
  const { currentUser } = store.getState();
  const messages = [
    {
      sender: "Nemmy",
      dateSent: "2020-07-20 00:08:32.319Z",
      content: "message 1"
    },
    {
      sender: "Tucker",
      dateSent: "2020-07-20 00:08:32.319Z",
      content: "message 2 ahjfda fkljdkslafjadslkjfkls dagjksdahfk jhds ajhfjkdshk afhjdsahj kgdjsak hkfhsdk agkajs khfksdahjkh jfk hsda"
    },
    {
      sender: "Nemmy",
      dateSent: "2020-07-20 00:08:32.319Z",
      content: "message 3 fjdaklfjdklsajfkldsjaflsdjafkljaslfjlskdajfsd"
    },
    {
      sender: "Tucker",
      dateSent: "2020-07-20 00:08:32.319Z",
      content: "message 4"
    },
  ]

  return ( 
    <div className="messages-list">
      {messages.map(message => {
        return <MessagesListItem 
          sender={message.sender}
          dateSent={message.dateSent}
          content={message.content}
        />
      })}
    </div>
  )
}
