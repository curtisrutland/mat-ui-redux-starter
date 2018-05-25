import React from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import light from "./light";
import dark from "./dark";

const lightTheme = createMuiTheme(light);
const darkTheme = createMuiTheme(dark);

const withRootTheme = (Component, useDarkTheme = false) => props => {
  const muiTheme = useDarkTheme ? darkTheme : lightTheme;
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Component {...props} />
    </MuiThemeProvider>
  )
};

export default withRootTheme;