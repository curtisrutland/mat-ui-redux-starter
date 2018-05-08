import { TOGGLE_DRAWER, OPEN_DRAWER, CLOSE_DRAWER } from "./actionTypes";

const initialState = {
  drawerOpen: false
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

    default:
      return state;
  }
};