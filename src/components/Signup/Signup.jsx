import React from "react";
import TextField from "@mui/material/TextField";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="form">
        <h1>Open new account</h1>
        <form action="">
          <div>
            <TextField
              label="UPI Id"
              variant="outlined"
              style={{ width: "25em" }}
            />
            <br />
            <br />
            <TextField
              label="UPI pin"
              variant="outlined"
              style={{ width: "25em" }}
            />
            <br />
            <br />
            <TextField
              label="Name"
              variant="outlined"
              style={{ width: "25em" }}
            />
            <br />
            <br />
            <TextField
              label="Email"
              variant="outlined"
              style={{ width: "25em" }}
            />
            <br />
            <br />

            <TextField
              label="Phone no"
              variant="outlined"
              style={{ width: "25em" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
