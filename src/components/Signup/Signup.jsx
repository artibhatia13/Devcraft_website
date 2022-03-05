import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="formContainer">
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
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <Button variant="contained">Sign Up</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
