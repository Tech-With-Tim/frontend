import {userConstants} from "../constants";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case userConstants.USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case userConstants.USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        error: null,
      }
    case userConstants.USER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: null,
      }
    default:
      return state;
  }
}

export default userReducer;
