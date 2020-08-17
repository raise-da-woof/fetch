import React, { useState } from "react";
import store from "../../utils/store";
import { Textarea } from "react-materialize";
import "materialize-css";
import "./style.css";

export default function MessageInput() {
  const { currentUser } = store.getState();

  return ( 
    <div className="message-input">
        <input id="message-content" type="text" placeholder="message..." />
    </div>
  )
}
