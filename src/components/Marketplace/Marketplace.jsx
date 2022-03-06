import React from "react";
import "./marketplace.css";
import laptop from "../../assets/laptop.jpg";
import phone from "../../assets/phone.jpg";
import headphone from "../../assets/headphone.jpg";

const Marketplace = () => {
  return (
    <div className="marketplace">
      <h1>Marketplace</h1>
      <div className="body">
        <div className="card">
          <img src={laptop} alt="laptop" />
          <div className="cardbody">
            <p>Laptop Apple</p>
            <p>300 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={phone} alt="laptop" />
          <div className="cardbody">
            <p>phone Oppo</p>
            <p>1000 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={headphone} alt="laptop" />
          <div className="cardbody">
            <p>headphone Boat</p>
            <p>800 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={laptop} alt="laptop" />
          <div className="cardbody">
            <p>Laptop Apple</p>
            <p>300 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={phone} alt="laptop" />
          <div className="cardbody">
            <p>phone Oppo</p>
            <p>580 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={headphone} alt="laptop" />
          <div className="cardbody">
            <p>headphone Boat</p>
            <p>990 tokens</p>
          </div>
        </div>
        <div className="card">
          <img src={phone} alt="laptop" />
          <div className="cardbody">
            <p>phone Oppo</p>
            <p>300 tokens</p>
          </div>
        </div>
        {/* <div className="card">
          <img src={laptop} alt="laptop" />
          <div className="cardbody">
          <p>Laptop Apple</p>
          <p>300 tokens</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Marketplace;
