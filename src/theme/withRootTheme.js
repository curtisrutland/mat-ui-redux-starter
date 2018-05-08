import React from 'react';
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import CssBaseline from "material-ui/CssBaseline";

import theme from "./light";
//import theme from "./dark";
const muiTheme = createMuiTheme(theme);

export default Component => props => (
  <MuiThemeProvider theme={muiTheme}>
    <CssBaseline />
    <Component {...props} />
  </MuiThemeProvider>
)