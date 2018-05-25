import {
  TOGGLE_DRAWER, OPEN_DRAWER, CLOSE_DRAWER,
  TOGGLE_THEME
} from "./actionTypes";

const initialState = {
  drawerOpen: false,
  useDarkTheme: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen
      }

    case OPEN_DRAWER:
      return {
        ...state,
        drawerOpen: true
      }

    case CLOSE_DRAWER:
      return {
        ...state,
        drawerOpen: false
      }

    case TOGGLE_THEME:
      return {
        ...state,
        useDarkTheme: !state.useDarkTheme
      }

    default:
      return state;
  }
};