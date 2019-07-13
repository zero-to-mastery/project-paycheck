import { combineReducers } from "redux";

export const user = (state = {}, action) => {
  switch (action.type) {
    case "CURRENT_USER":
      return action.payload.user;
    default:
      return state;
  }
};

export default combineReducers({
  user
});
