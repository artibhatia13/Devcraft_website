import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        navigate("/");
        alert("Successfully logged in");
      }
    } catch (err) {
      console.log(err);
      alert(
        "There seems to be some error in logging in right now. Please verify your credentials and try again"
      );
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <h1>Login</h1>
        <form onSubmit={handleSignin}>
          <div>
            <TextField
              label="Email"
              variant="outlined"
              style={{ width: "25em" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <TextField
              label="Password"
              variant="outlined"
              style={{ width: "25em" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
