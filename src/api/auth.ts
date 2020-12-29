import {ajax} from "rxjs/ajax";
import {BACKEND_URL, REDIRECT} from "../config";

// TODO: change this later
export function login(code) {
  return ajax.post(`${BACKEND_URL}/auth/discord/callback`,
    {
      code,
      redirect_uri: REDIRECT
    },
    {
      "Content-Type": "application/json",
    }
  );
}
