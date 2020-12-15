import { combineReducers } from "redux";
import authReducer from "./auth.reducer";

export const baseReducer = combineReducers({authReducer});
