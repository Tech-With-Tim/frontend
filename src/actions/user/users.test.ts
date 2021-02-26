import * as types from "../../constants/user.constants";
import * as actions from "./user.action";

describe("Users Creators", () => {
  it("Request User Action", () => {
    const user = "@me";
    const expectedAction = {
      type: types.userConstants.USER_DATA_REQUEST,
      user: "@me",
    };

    expect(actions.getUser(user)).toEqual(expectedAction);
  });
});
