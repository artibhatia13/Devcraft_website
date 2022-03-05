import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./signup.css";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup">
      <div className="formContainer">
        <h1>Open new account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="First Name"
              variant="outlined"
              style={{ width: "25em" }}
            />
            <br />
            <br />
            <TextField
              label="Last Name"
              variant="outlined"
              style={{ width: "25em" }}
            />
            <br />
            <br />
            <TextField
              label="Phone Number"
              variant="outlined"
              style={{ width: "25em" }}
            />
            <br />
            <br />
            <TextField
              label="UPI ID"
              variant="outlined"
              style={{ width: "25em" }}
            />
            <br />
            <br />
            <TextField
              label="Bank"
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
