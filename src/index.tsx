import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Normalize } from "styled-normalize";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="https://yuriizag.github.io/pet-support-front">
        <Normalize />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
