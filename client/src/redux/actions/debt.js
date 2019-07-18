import { FETCH_DEBTS_SUCCESS, SAVE_DEBT_SUCCESS } from "./types";

import getDebts, { saveDebtApi } from "../../mockApi/api/debtApi";

// synchronous actions
const updateDebtSuccess = (id = "", updates = {}) => ({
  type: SAVE_DEBT_SUCCESS,
  id,
  updates
});

const fetchDebtSuccess = (debt = []) => ({
  type: FETCH_DEBTS_SUCCESS,
  debt
});

// Asynchronous actions -> Thunks
const fetchDebts = () => {
  return async dispatch => {
    try {
      const response = await getDebts();
      if (response) {
        return dispatch(
          fetchDebtSuccess(
            response.map(debt => ({ ...debt, value: parseFloat(debt.value) })) //Parse to double
          )
        );
      }
    } catch (error) {
      throw error;
    }
  };
};
const saveDebt = debt => {
  return async dispatch => {
    try {
      const { id, ...updates } = debt;
      await saveDebtApi(debt);
      return dispatch(updateDebtSuccess(id, updates));
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };
};
export { fetchDebts, saveDebt };
