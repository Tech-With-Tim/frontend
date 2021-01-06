import {AjaxError} from "rxjs/ajax";

// TODO: better global error handler
export const handleAPIError = (error: AjaxError) => {
  if (!error.status) {
    return "Failed To Connect to server...";
  }
  return error.response.error;
}
