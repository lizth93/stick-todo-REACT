import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Own
import App from "./app";
import store from "./store/index";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
