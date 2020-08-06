import React, { useState } from 'react'
import MyUserDetails from "../../components/MyUserDetails";
import ConversationsList from "../ConversationsList";
import { Col } from "react-materialize";
import 'materialize-css'
import "./style.css";


export default function Conversations () {
  
    return (
        <Col m={4} s={12} className="conversations">
          <MyUserDetails />
          <ConversationsList />
        </Col>
    )

}
