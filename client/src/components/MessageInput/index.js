import React, { useState } from "react";
import store from "../../utils/store";
import { Textarea } from "react-materialize";
import "materialize-css";
import "./style.css";

export default function MessageInput() {
  const { currentUser } = store.getState();

  return ( 
    <div className="message-input">
        <Textarea s={12} id="message-content" placeholder="message..." />
    </div>
  )
}
