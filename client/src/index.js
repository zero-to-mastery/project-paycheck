import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "App";
import ThemeWrapper from "ThemeWrapper";
import store from "./redux";

import { BrowserRouter } from "react-router-dom"
ReactDOM.render(
  <Provider store={store}>
    <ThemeWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeWrapper>
  </Provider>,
  document.getElementById("root")
);
