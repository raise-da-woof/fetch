import React from "react";
import "./style.css";

function Alerts({ error }) {
  const showAlert = () => {
    if (error.type === "danger") {
      return (
        <div class="alert alert-danger animate__animated animate__fadeIn" role="alert">
          Something went wrong! <br /> Please try again.
        </div>
      );
    } else if (error.type === "success") {
      return (
        <div class="alert alert-success animate__animated animate__fadeIn" role="alert">
          Everythings looking good! Woof!!
        </div>
      );
    } else if (error.type === "custom") {
      return (
        <div class="alert alert-danger animate__animated animate__fadeIn" role="alert">
          {error.msg}
        </div>
      );
    } else {
      return <> </>;
    }
  };
  return <>{showAlert()}</>;
}

export default Alerts;
