import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "App";
import ThemeWrapper from "ThemeWrapper";
import reducers from "redux/reducers";

ReactDOM.render(
  <Provider
    store={createStore(
      reducers,
      compose(
        applyMiddleware(thunk),
        composeWithDevTools()
      )
    )}
  >
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </Provider>,
  document.getElementById("root")
);
