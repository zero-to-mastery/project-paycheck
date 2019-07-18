import { handleError, handleResponse } from "./apiHelpers";

// we should use .env variables for constants and keys
const url = "http://localhost:3002/debt/";

export const getDebts = async () => {
  try {
    const response = await fetch(url);
    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
export const saveDebtApi = async debt => {
  try {
    fetch(url + (debt.id || ""), {
      method: debt.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
      headers: { "content-type": "application/json" },
      body: JSON.stringify(debt)
    });
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export default getDebts;
