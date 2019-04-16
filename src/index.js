import React from "react";
import ReactDom from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./css/style.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./components/App";
import reducer from "./reducers";

ReactDom.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
