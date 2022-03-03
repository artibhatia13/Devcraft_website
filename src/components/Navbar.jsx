import React from "react";
import Button from "@mui/material/Button";
import "../App.css";

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
            <a href="/">
              <li>Services</li>
            </a>
            <a href="/signup">
              <li>Community</li>
            </a>
            <a href="/">
              <li>Blog</li>
            </a>
          </div>
          <Button variant="outlined" style={{ marginLeft: " 1em" }}>
            Login
          </Button>
          <a href="/signup">
            <Button variant="contained">Get Started</Button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
