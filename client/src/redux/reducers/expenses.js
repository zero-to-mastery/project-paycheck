import {
  FETCH_EXPENSES_SUCCESS,
  ADD_EXPENSE_SUCCESS,
  SAVE_EXPENSE_SUCCESS
} from "../actions/types";
import initialState from "../initialState";

const expensesReducer = (state = initialState.expenses, action) => {
  switch (action.type) {
    case ADD_EXPENSE_SUCCESS:
      return [...state, action.expense];
    case FETCH_EXPENSES_SUCCESS:
      return action.expenses;
    case SAVE_EXPENSE_SUCCESS:
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;
