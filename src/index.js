import "./css/body.css";
import "./css/app.css";
import "./css/header.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import { CallsProvider } from "./context/CallsContext.js";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CallsProvider>
      <App />
    </CallsProvider>
  </React.StrictMode>
);
