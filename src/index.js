import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Router from "./Router";
import GlobalStyle from "./styles/reset";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
