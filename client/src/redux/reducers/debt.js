import { FETCH_DEBTS_SUCCESS, ADD_DEBT_SUCCESS, SAVE_DEBT_SUCCESS } from "../actions/types";
import initialState from "../initialState";

const debtsReducer = (state = initialState.debt, action) => {
  switch (action.type) {
    case ADD_DEBT_SUCCESS:
      return [...state, action.debt];
    case FETCH_DEBTS_SUCCESS:
      return action.debt;
    case SAVE_DEBT_SUCCESS:
      return state.map(debt => {
        if (debt.id === action.id) {
          return { ...debt, ...action.updates };
        } else {
          return debt;
        }
      });
    default:
      return state;
  }
};

export default debtsReducer;
