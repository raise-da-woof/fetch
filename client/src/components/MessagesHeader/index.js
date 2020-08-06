import React, { useState } from "react";
import store from "../../utils/store";
import { Icon } from "react-materialize";
import "materialize-css";
import "./style.css";

export default function MessagesHeader() {
    const currentConversation = {
        name: "Tucker",
        age: "Senior",
        gender: "Male",
        size: "Medium",
        breed: "Soft-Coated Wheaton Terrier"
    }

    function renderDescription(info) {
        return info.age + ' ' + info.gender + ' ' + info.size + ' ' + info.breed;
    }

  return ( 
    <div className="messages-header">
        <a><Icon>navigate_before</Icon></a>
        <div>
            <h4>{ currentConversation.name }</h4>
            <p>{renderDescription(currentConversation)}</p>
        </div>
        <a><Icon>account_circle</Icon></a>
    </div>
  )
}
