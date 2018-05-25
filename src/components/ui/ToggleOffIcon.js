import React from 'react';
import * as toggleOffSvg from "../../assets/toggle-off.svg";

export default ({size = 24}) => (
  <img src={toggleOffSvg} style={{width: size}} alt="Toggle Off Icon" />
);