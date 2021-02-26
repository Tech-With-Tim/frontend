import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import profileReducer from "./users/profile.reducer";

export const baseReducer = combineReducers({ authReducer, profileReducer });
