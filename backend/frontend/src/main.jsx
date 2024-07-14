// src/main.jsx - render the root component

// import library
import React from "react";
// import module
import ReactDOM from "react-dom/client";
// import Component
import App from "./App.jsx";
// import CSS file for styling
import "./styles/index.css";

// render App component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
