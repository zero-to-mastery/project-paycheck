import { handleError, handleResponse } from "./apiHelpers";

// we should use .env variables for constants and keys
const url = "http://localhost:3002/expenses";

export const getExpenses = async () => {
  try {
    const response = await fetch(url);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};

export default getExpenses;
