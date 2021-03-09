//Root React File
import React, { Component } from "react"; //react library
import ReactDOM from "react-dom"; //virtual dom react-dom only in root index

import App from "./App";
import "./index.css";

ReactDOM.render(
  //without jsx install es7 extension
  //   React.createElement("h1", { class: "header" }, "I am pure react Element")

  <App />,
  document.getElementById("root")
);
