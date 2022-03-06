import React from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        alert("Successfully signed out");
        navigate("/");
      })
      .catch((error) => {
        alert("There seems to be some error in signing out. please try again");
        // An error happened.
      });
  };
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h2>Tred</h2>
      </Link>
      <div className="navLinks">
        <ul>
          <div style={{ margin: "auto 0", display: "flex" }}>
            <Link to="/about">
              <li>About</li>
            </Link>
            {user ? (
              <>
                <Link to="/dashboard">
                  <li>Dashboard</li>
                </Link>
                <Link to="/marketplace">
                  <li>Marketplace</li>
                </Link>
                <Button
                  variant="contained"
                  style={{ marginLeft: " 1em" }}
                  onClick={handleLogout}
                >
                  LogOut
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined" style={{ marginLeft: " 1em" }}>
                    Login
                  </Button>
                </Link>
                <Link to="/signup" style={{ marginRight: "0em" }}>
                  <Button variant="contained">Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
