import { combineReducers } from "redux";
import userReducer from "./user";
import expensesReducer from "./expenses";
import debtReducer from "./debt";
const rootReducer = combineReducers({
  user: userReducer,
  expenses: expensesReducer,
  debt: debtReducer
});

export default rootReducer;
