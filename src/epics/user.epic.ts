import {userConstants} from "../constants";
import {ofType} from "redux-observable";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import * as api from "../api";
import {BACKEND_URL} from "../config";

export const loginEpic = (action$, _, __) => {
  const success = token => {
    localStorage.setItem("token", token);
    return {type: userConstants.LOGIN_SUCCESS, token}
  }
  const failure = error => {
    let e;
    if (error.status === 500) {
      e = "Error 500: Internal Server Error";
    } else {
      e = "Error 400: Bad Request";
    }
    return {type: userConstants.LOGIN_FAILURE, error: e}
  }

  return action$.pipe(
    ofType(userConstants.LOGIN_SET_CODE),
    mergeMap((action: any) => api.login(action.code).pipe(
      map((res: any) => success(res.response.token)),
      catchError(error => of(failure(error))),
    )),
  );
};

export const userDataEpic = (action$, state$, deps) => {
  const success = user => {
    return {type: userConstants.USER_DATA_SUCCESS, payload: {user}}
  }
  const failure = error => {
    let e;
    if (error.status === 500) {
      e = "Error 500: Internal Server Error";
    } else {
      e = "Error 401: Unauthorized / Invalid Token";
    }
    return {type: userConstants.USER_DATA_FAILURE, payload: {error: e}}
  }
  return action$.pipe(
    ofType(userConstants.USER_DATA_REQUEST),
    mergeMap((action: any) => deps.ajax.get(`${BACKEND_URL}/users/${action.user}`,
      {
        "Authorization": state$.value.authReducer.token,
      }
    ).pipe(
      map((res: any) => success(res.response)),
      catchError(error => of(failure(error))),
    )),
  );
}

export const userEpics = [loginEpic, userDataEpic];
