import {userConstants} from "../constants";

const setCode = code => {
  return {type: userConstants.LOGIN_SET_CODE, code}
};

const setToken = token => {
  return {type: userConstants.LOGIN_SET_TOKEN, token}
};

export {setCode, setToken};
