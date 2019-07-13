import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#b71c1c"
    },
    secondary: {
      main: "#bcbcbc"
    },
    type: "dark"
  }
});

const ThemeWrapper = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default ThemeWrapper;
