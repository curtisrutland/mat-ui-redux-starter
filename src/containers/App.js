import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRootTheme from "../theme/withRootTheme";
import TitleBar from '../components/ui/TitleBar';
import SideDrawer from '../components/ui/SideDrawer';
import { Typography } from '@material-ui/core';

const styles = {
  root: {
    paddingTop: 80,
    width: '95%',
    maxWidth: 900,
    margin: "0 auto",
  }
};

const app = ({ classes }) => {
  return (
    <Fragment>
      <TitleBar />
      <SideDrawer />
      <div className={classes.root}>
        <Typography variant="body2">
          Material-UI React Redux Starter
        </Typography>
      </div>
    </Fragment>
  )
};

export const LightThemeApp = withRootTheme(withStyles(styles)(app));
export const DarkThemeApp = withRootTheme(withStyles(styles)(app), true);
export default LightThemeApp;