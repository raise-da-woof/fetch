import React from "react";
import "./style.css";

function Alerts({ error }) {
  const showAlert = () => {
    switch(error.type) {
      case "danger":
        return (
          <div className="alert alert-danger animate__animated animate__fadeIn" role="alert">
            Something went wrong! <br /> Please try again.
          </div>
        );
      case "success":
        return (
          <div className="alert alert-success animate__animated animate__fadeIn" role="alert">
            Everythings looking good! Woof!!
          </div>
        );
      case "custom":
        return (
          <div className="alert alert-danger animate__animated animate__fadeIn" role="alert">
            {error.msg}
          </div>
        );
      default:
        return <> </>;
    }
  };
  return <>{showAlert()}</>;
}

export default Alerts;
