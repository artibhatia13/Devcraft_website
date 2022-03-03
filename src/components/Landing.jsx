import React from "react";
import app_display from "../assets/app_display.png";

const Landing = () => {
  return (
    <div className="landing">
      <div className="tagline">
        <h1>Banking must be smarter</h1>
        <h5>We help you get complete control over your money.</h5>
      </div>
      <div className="landing_img">
        <img src={app_display} alt="app display" />
      </div>
    </div>
  );
};

export default Landing;
