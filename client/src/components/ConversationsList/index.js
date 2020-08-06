import React, { useState } from 'react'
import store from "../../utils/store";
import { Col } from "react-materialize";
import 'materialize-css'
import "./style.css";
import ConversationsListItem from '../ConversationsListItem';


export default function ConversationsList () {
    const { matches } = store.getState();
    console.log("Convo List", matches)

  
    return (
       <div className="conversations-list">
        <h5>Conversations</h5>
        {matches.map(match => {
            return <ConversationsListItem 
                name={match.name}
                image={match.image}
            />
        })}
       </div>
    )

}