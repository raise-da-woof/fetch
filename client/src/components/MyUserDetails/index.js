import React, { useState } from "react";
import store from "../../utils/store";
import { Col } from "react-materialize";
import "materialize-css";
import "./style.css";

export default function MyUserDetails() {
  const { currentUser } = store.getState();

  return ( 
    <div className="my-user-details">
        <img src={ currentUser.pets[0].image } />
        <h4 >{ currentUser.pets[0].name }</h4>
    </div>
  )
}
