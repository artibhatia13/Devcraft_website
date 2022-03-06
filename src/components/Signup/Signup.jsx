import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./signup.css";
import { Autocomplete } from "@mui/material";
import banks from "../../utils/banksList";
import { Box } from "@mui/system";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { fireStoreDb } from "../../fbConfig";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bank, setBank] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [upiId, setUpiId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const obj = {
        email,
        name,
        password,
        bank,
        phoneNumber,
        upiId,
        userId: user.uid,
      };
      await setDoc(doc(fireStoreDb, "users", user.uid), obj);
      alert("Successfully signed up✨");
      navigate("/");
    } catch (error) {
      console.log("Error in signing up: " + error);
      alert(
        "There seems to be some error in signing up. Please verify your inputs and try again."
      );
    }
  };
  return (
    <div className="signup">
      <div className="formContainer">
        <h1>Open new account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Name"
              variant="outlined"
              style={{ width: "25em" }}
              value={name}
              requried={true}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
            <TextField
              label="Phone Number"
              variant="outlined"
              style={{ width: "25em" }}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />
            <br />
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
            <TextField
              label="UPI ID"
              variant="outlined"
              style={{ width: "25em" }}
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
            <br />
            <br />
            <Autocomplete
              id="country-select-demo"
              options={banks}
              autoHighlight
              value={bank}
              isOptionEqualToValue={() => bank.label}
              onChange={(e, newVal) => setBank(newVal)}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img width="40" src={option.imgUrl} alt="bank logo" />
                  {option.label}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose your bank"
                  inputProps={{
                    ...params.inputProps,
                    // autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
            />
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
              <Button type="submit" variant="contained">
                Sign Up
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
