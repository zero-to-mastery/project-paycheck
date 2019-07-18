import { combineReducers } from "redux";
import userReducer from "./user";
const rootReducer = combineReducers({ user: userReducer });

export default rootReducer;
