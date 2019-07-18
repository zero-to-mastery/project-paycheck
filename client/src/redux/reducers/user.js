import { CURRENT_USER } from "../actions/types";
import initialState from "../initialState";
export const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return action.payload.user;
    default:
      return state;
  }
};

export default userReducer;
