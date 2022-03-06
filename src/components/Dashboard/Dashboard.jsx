import React from "react";
import Button from "@mui/material/Button";
import "./dashboard.css";
import graph from "../../assets/graph.png";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <h1>dashboard</h1> */}
      <div className="row1">
        <div className="balance_card">
          <div className="left">
            <p>Main account</p>
            <h3>TredBank savings account</h3>
            <p style={{ letterSpacing: "2px" }}>55999 4854 9200 03484</p>
            <Button variant="contained" style={{ marginLeft: " 1em" }}>
              Transfer Money
            </Button>
          </div>
          <div className="right">
            <p>available</p>
            <h2>1,23,680.00</h2>
          </div>
        </div>
        <div className="card2">
          <h3>something</h3>
        </div>
      </div>
      <div className="row2">
        <div className="statement">
          <h3>Statement</h3>
          <div className="statement_row">
            <p className="time">Today</p>
            <p className="where">Swiggy</p>
            <p className="method">Card payment</p>
            <p className="forwhat">Food</p>
            <p className="amount">599.00</p>
          </div>
          <div className="statement_row">
            <p className="time">Today</p>
            <p className="where">Zara</p>
            <p className="method">Card payment</p>
            <p className="forwhat">Clothes</p>
            <p className="amount">5790.00</p>
          </div>
        </div>
        <div className="graph">
          <h5>All expenses</h5>
          <div className="expense">
            <div style={{ flex: "0.33" }}>
              <p className="forwhat">Daily</p>
              <p className="amount" style={{ textAlign: "start" }}>
                400.00
              </p>
            </div>
            <div style={{ flex: "0.33" }}>
              <p className="forwhat">Weekly</p>
              <p className="amount" style={{ textAlign: "start" }}>
                26000.00
              </p>
            </div>
            <div style={{ flex: "0.33" }}>
              <p className="forwhat">Monthly</p>
              <p className="amount" style={{ textAlign: "start" }}>
                100000.00
              </p>
            </div>
          </div>
          <img src={graph} alt="grph" style={{ height: "13em" }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
