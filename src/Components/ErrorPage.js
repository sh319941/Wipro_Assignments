import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function ErrorPage(props) {
  return (
    <div>
      {props.Flag == true ? (
        <h1 style={{ color: "Red" }}>Error Occured While Loading the Data</h1>
      ) : (
        <div class="d-flex align-items-center">
          <br></br>
          <h3>
            <strong>Loading...</strong>
          </h3>
          <div
            class="spinner-border text-danger"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
      )}
    </div>
  );
}

export default ErrorPage;
