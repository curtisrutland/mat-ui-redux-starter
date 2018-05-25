import {
  TOGGLE_DRAWER, OPEN_DRAWER, CLOSE_DRAWER,
  TOGGLE_THEME
} from "./actionTypes";
import action from "../action";

export const toggleDrawer = action(TOGGLE_DRAWER);
export const openDrawer = action(OPEN_DRAWER); 
export const closeDrawer = action(CLOSE_DRAWER);
export const toggleTheme = action(TOGGLE_THEME);