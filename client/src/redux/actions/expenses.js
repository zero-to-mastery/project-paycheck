import { FETCH_EXPENSES_SUCCESS, SAVE_EXPENSE_SUCCESS } from "./types";

import getExpenses, { saveExpenseApi } from "../../mockApi/api/expensesApi";

// synchronous actions
const updateExpenseSuccess = (id = "", updates = {}) => ({
  type: SAVE_EXPENSE_SUCCESS,
  id,
  updates
});

const fetchExpensesSuccess = (expenses = []) => ({
  type: FETCH_EXPENSES_SUCCESS,
  expenses
});

// Asynchronous actions -> Thunks
const fetchExpenses = () => {
  return async dispatch => {
    try {
      const response = await getExpenses();
      if (response) {
        return dispatch(
          fetchExpensesSuccess(
            response.map(expense => ({ ...expense, value: parseFloat(expense.value) })) //Parse to double
          )
        );
      }
    } catch (error) {
      throw error;
    }
  };
};
const saveExpense = expense => {
  return async dispatch => {
    try {
      const { id, ...updates } = expense;
      await saveExpenseApi(expense);
      return dispatch(updateExpenseSuccess(id, updates));
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };
};
export { fetchExpenses, saveExpense };
