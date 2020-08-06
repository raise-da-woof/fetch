import React, { useState } from 'react'
import { Col, Icon } from "react-materialize";
import 'materialize-css'
import "./style.css";


export default function ConversationsListItem({ image, name }) {
  
    return (
       <div className="conversations-list-item">
        <img src={ image } />
        <h6 >{ name }</h6>
        <Icon>navigate_next</Icon>
       </div>
    )

}
