import { userConstants } from "../../constants";

export const getUser = (user: number | "@me") => {
  return { type: userConstants.USER_DATA_REQUEST, user };
};
