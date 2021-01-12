import {userConstants} from "../constants";
import {ofType} from "redux-observable";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {BACKEND_URL, REDIRECT} from "../config";
import {handleAPIError} from "../helpers";

export const loginEpic = (action$, _, deps) => {
  const success = token => {
    localStorage.setItem("token", token);
    return {type: userConstants.LOGIN_SUCCESS, token}
  }
  const failure = error => ({type: userConstants.LOGIN_FAILURE, error: handleAPIError(error)});
  return action$.pipe(
    ofType(userConstants.LOGIN_SET_CODE),
    mergeMap((action: any) => deps.ajax.post(`${BACKEND_URL}/auth/discord/callback`,
      {
        code: action.code,
        callback: REDIRECT
      },
      {
        "Content-Type": "application/json",
      }
    ).pipe(
      map((res: any) => success(res.response.token)),
      catchError(error => of(failure(error))),
    )),
  );
};

export const userDataEpic = (action$, state$, deps) => {
  const success = user => ({type: userConstants.USER_DATA_SUCCESS, payload: {user}})
  const failure = error => {
    return {type: userConstants.USER_DATA_FAILURE, payload: {error: handleAPIError(error)}}
  };
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
