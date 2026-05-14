import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { T } from "./design/tokens";

const rootElement = document.documentElement;
const bodyElement = document.body;

rootElement.style.background = T.bg;
bodyElement.style.margin = "0";
bodyElement.style.minHeight = "100vh";
bodyElement.style.background = T.bg;
bodyElement.style.fontFamily = T.fontBody;
bodyElement.style.color = T.textPrimary;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
