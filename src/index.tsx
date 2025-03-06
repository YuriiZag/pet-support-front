import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Normalize } from "styled-normalize";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename="/pet-support-front">
        <Normalize />
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
