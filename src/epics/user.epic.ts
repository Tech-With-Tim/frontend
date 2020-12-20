import {userConstants} from "../constants";
import {ofType} from "redux-observable";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {login} from "../services";

const loginEpic = action$ => {
  const success = token => {
    return {type: userConstants.LOGIN_SUCCESS, token}
  }
  const failure = error => {
    let e;
    if (error.status === 500){
      e = "Error 500: Internal Server Error";
    }else{
      e = "Error 400: Bad Request";
    }
    return {type: userConstants.LOGIN_FAILURE, error: e}
  }

  return action$.pipe(
    ofType(userConstants.LOGIN_SET_CODE),
    mergeMap((action: any) => login(action.code).pipe(
      map(res => success(res.response.token)),
      catchError(error => of(failure(error))),
    )),
  );
};

export const userEpics = [loginEpic]
