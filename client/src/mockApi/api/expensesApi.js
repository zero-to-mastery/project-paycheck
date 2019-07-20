import { handleError, handleResponse } from "./apiHelpers";

// we should use .env variables for constants and keys
const url = "http://localhost:3002/expenses/";

export const getExpenses = async () => {
  try {
    const response = await fetch(url);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
export const saveExpenseApi = async expense => {
  try {
    fetch(url + (expense.id || ""), {
      method: expense.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
      headers: { "content-type": "application/json" },
      body: JSON.stringify(expense)
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export default getExpenses;
