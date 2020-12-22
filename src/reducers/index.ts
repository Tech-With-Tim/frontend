import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducer from "./user.reducer";

export const baseReducer = combineReducers({authReducer, userReducer});
