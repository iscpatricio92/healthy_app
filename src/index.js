import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
//TODO if delete React.StrictMode component prevent sideEffect twice needs to be improve
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
