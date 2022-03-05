import React from "react";
import Button from "@mui/material/Button";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">LOGO</div>
      <div className="navLinks">
        <ul>
          <div style={{ margin: "auto 0", display: "flex" }}>
            <a href="/about">
              <li>About</li>
            </a>
            <a href="/dashboard">
              <li>Dashboard</li>
            </a>
            <a href="/marketplace">
              <li>Marketplace</li>
            </a>
            <a href="/">
              <li>Blog</li>
            </a>
          </div>
          <a href="/login">
            <Button variant="outlined" style={{ marginLeft: " 1em" }}>
              Login
            </Button>
          </a>
          <a href="/signup" style={{ marginRight: "0em" }}>
            <Button variant="contained">Get Started</Button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
