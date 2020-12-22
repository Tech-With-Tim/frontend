import {BACKEND_URL, REDIRECT} from "../config";
import {ajax} from "rxjs/ajax"

const login = (code: string) => {
  return ajax({
    url: `${BACKEND_URL}/auth/discord/callback`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      code,
      redirect_uri: REDIRECT
    }
  });
}

const getUser = (user: number | "@me", token: string) => {
  return ajax({
    url: `${BACKEND_URL}/users/${user}`,
    headers: {
      "Authorization": token,
    },
    method: "GET"
  });
}

export {login, getUser}
