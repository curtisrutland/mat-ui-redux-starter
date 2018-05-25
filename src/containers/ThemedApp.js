import React from 'react';
import { connect } from "react-redux";
import { LightThemeApp, DarkThemeApp } from "./App";

const mapStateToProps = ({ ui }) => (
  { useDarkTheme: ui.useDarkTheme }
);

const themedApp = ({ useDarkTheme }) => {
  return useDarkTheme
    ? <DarkThemeApp />
    : <LightThemeApp />;
};

export default connect(mapStateToProps)(themedApp);