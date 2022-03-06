import React from "react";
import "./footer.css";
import download from "../../assets/download.png";

const Footer = () => {
  return (
    <div className="footer">
      <div style={{ flex: "0.2" }}>
        <h1>Neo</h1>
      </div>
      <div style={{ flex: "0.2" }}>
        <h4>Products</h4>
        <p>Ecard</p>
        <p>Rewards</p>
        <p>Savings</p>
      </div>
      <div style={{ flex: "0.2" }}>
        <h4>Neo-Bank</h4>
        <p>About</p>
        <p>Contact info</p>
        <p>Careers</p>
        <p>FAQ</p>
      </div>
      <div style={{ flex: "0.2" }}>
        <h4>Explore</h4>
        <p>Community</p>
        <p>Blogs</p>
      </div>
      <div style={{ flex: "0.2" }}>
        <h4>Download App</h4>
        <img src={download} alt="download " />
      </div>
    </div>
  );
};

export default Footer;
