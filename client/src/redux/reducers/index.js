import { combineReducers } from "redux";
import userReducer from "./user";
import expensesReducer from "./expenses";
const rootReducer = combineReducers({ user: userReducer, expenses: expensesReducer });

export default rootReducer;
