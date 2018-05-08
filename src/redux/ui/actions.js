import { TOGGLE_DRAWER, OPEN_DRAWER, CLOSE_DRAWER } from "./actionTypes";

export const toggleDrawer = () => ({ type: TOGGLE_DRAWER });
export const openDrawer = () => ({ type: OPEN_DRAWER });
export const closeDrawer = () => ({ type: CLOSE_DRAWER });