import {userConstants} from "../constants";
import {history} from "../helpers";

const initialState = {
  token: null,
  error: null
}

function authReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      history.push("/");
      return {
        ...state,
        token: action.token,
      }
    case userConstants.LOGIN_FAILURE:
      history.push("/login");
      return {
        ...state,
        error: action.error
      }
    case userConstants.LOGIN_SET_TOKEN:
      return {
        ...state,
        token: action.token
      }
    default:
      return state
  }
}

export default authReducer
