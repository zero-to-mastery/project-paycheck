import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "App";
import ThemeWrapper from "ThemeWrapper";
import store from "./redux";
ReactDOM.render(
  <Provider store={store}>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </Provider>,
  document.getElementById("root")
);
