import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScopedCssBaseline>
        <App />
      </ScopedCssBaseline>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
