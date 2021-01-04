import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import profileReducer from "./profile.reducer";

export const baseReducer = combineReducers({authReducer, profileReducer});
