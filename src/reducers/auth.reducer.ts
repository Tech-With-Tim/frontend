import {userConstants} from "../constants";

interface initialState {
  token: null | string,
  error: null | string,
}

function authReducer(state: undefined | initialState = {token: null, error: null}, action) {
  switch (action.type) {
  case userConstants.LOGIN_SUCCESS:
    return {
      ...state,
      token: action.token,
    }
  case userConstants.LOGIN_FAILURE:
    return {
      ...state,
      error: action.error
    }
  case userConstants.LOGIN_SET_TOKEN:
    return {
      ...state,
      token: action.token
    }
  case userConstants.LOGOUT:
    localStorage.removeItem("token");
    return {
      ...state,
      token: null
    }
  default:
    return state
  }
}

export default authReducer
