import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./fonts/stylesheet.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ScrollMemory from "react-router-scroll-memory";

const history = createBrowserHistory();
if(!localStorage.getItem('anonymous')){
  localStorage.setItem("anonymous", Math.random(5))
}



ReactDOM.render(
  <Router history={history}>
    <ScrollMemory />
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
