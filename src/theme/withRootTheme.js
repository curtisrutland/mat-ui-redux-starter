import React from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "./light";
//import theme from "./dark";
const muiTheme = createMuiTheme(theme);

const withRootTheme = (Component) => props => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Component {...props} />
    </MuiThemeProvider>
  )
};

export default withRootTheme;