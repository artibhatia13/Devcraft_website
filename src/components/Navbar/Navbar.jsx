import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h2>Neo</h2>
      </Link>
      <div className="navLinks">
        <ul>
          <div style={{ margin: "auto 0", display: "flex" }}>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link to="/marketplace">
              <li>Marketplace</li>
            </Link>
          </div>
          <Link to="/login">
            <Button variant="outlined" style={{ marginLeft: " 1em" }}>
              Login
            </Button>
          </Link>
          <Link to="/signup" style={{ marginRight: "0em" }}>
            <Button variant="contained">Get Started</Button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
