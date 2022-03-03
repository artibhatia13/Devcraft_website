import React from "react";
import TextField from "@mui/material/TextField";

const Signup = () => {
  return (
    <div className="signup">
      <div>
        <h1>Open new account</h1>
        <form action="">
          <TextField label="Outlined" variant="outlined" />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
