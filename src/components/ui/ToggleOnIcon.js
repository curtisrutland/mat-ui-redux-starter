import React from 'react';
import * as toggleOnSvg from "../../assets/toggle-on.svg";

export default ({size = 24}) => (
  <img src={toggleOnSvg} style={{width: size}} alt="Toggle On Icon" />
);