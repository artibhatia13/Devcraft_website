import React from "react";
import ReactDOM from "react-dom";
import { firebase } from "./fbConfig";
import App from "./App";

console.log(firebase);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
