import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="formContainer">
        <h1>Login</h1>
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
            <div style={{ textAlign: "center" }}>
              <Button variant="contained">Login</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
