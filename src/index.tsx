import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { Theme } from "./styles/Theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Router>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </Router>
);
