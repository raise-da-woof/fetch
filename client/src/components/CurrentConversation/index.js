import React, { useState } from 'react'
import MessagesHeader from "../MessagesHeader";
import MessagesList from "../MessagesList";
import MessageInput from "../MessageInput";
import { Col } from "react-materialize";
import 'materialize-css'
import "./style.css";


export default function CurrentConversation () {
 
    return (
        <Col m={8} s={12} className="current-conversation">
          <MessagesHeader />
          <MessagesList />
          <MessageInput />
        </Col>
    )

}