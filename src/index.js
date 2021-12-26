import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./common/data/reducers";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Router from "./Router";
import GlobalStyle from "./styles/reset";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
