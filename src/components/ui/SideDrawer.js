import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {
  List, ListItem, ListItemIcon,
  ListItemText
} from '@material-ui/core';

import * as UiActions from "../../redux/ui/actions";
import GithubIcon from './GithubIcon';
import ToggleOffIcon from "./ToggleOffIcon";
import ToggleOnIcon from "./ToggleOnIcon";

const styles = {
  list: {
    width: 300,
  },
  icon: {
    width: 24
  }
};

const mapStateToProps = ({ ui }) => {
  const { drawerOpen, useDarkTheme } = ui;
  return { drawerOpen, useDarkTheme };
};

const mapDispatchtoProps = dispatch => ({
  uiActions: bindActionCreators(UiActions, dispatch),
});

const sideDrawer = ({
  drawerOpen, uiActions, todoActions,
  classes, useDarkTheme
}) => {
  return (
    <SwipeableDrawer open={drawerOpen} onOpen={uiActions.openDrawer} onClose={uiActions.closeDrawer}>
      <div tabIndex={0} role="button" onClick={uiActions.closeDrawer} onKeyDown={uiActions.closeDrawer}>
        <div className={classes.list}>
          <List>
            <ListItem button onClick={() => window.location.href = "https://github.com/curtisrutland/mat-ui-rexux-starter"}>
              <ListItemIcon>
                <GithubIcon />
              </ListItemIcon>
              <ListItemText primary="Project Github" />
            </ListItem>
            <ListItem button onClick={uiActions.toggleTheme}>
              <ListItemIcon>
                {useDarkTheme ? <ToggleOnIcon /> : <ToggleOffIcon />}
              </ListItemIcon>
              <ListItemText primary="Toggle Theme" />
            </ListItem>
          </List>
        </div>
      </div>
    </SwipeableDrawer>
  )
};

const styledSideDrawer = withStyles(styles)(sideDrawer);

export default connect(mapStateToProps, mapDispatchtoProps)(styledSideDrawer);