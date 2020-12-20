import {userConstants} from "../constants";

const initialState = {
  token: null,
  error: null
}

function authReducer(state = initialState, action) {
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
      return {
        ...state,
        token: null
      }
    default:
      return state
  }
}

export default authReducer
