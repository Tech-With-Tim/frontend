import * as actions from "./auth.action";
import * as types from "../../constants/user.constants";

describe("Actions Creators", () => {
  it("Set Token Action", () => {
    const token = "FakeToken";
    const expectedAction = {
      type: types.userConstants.LOGIN_SET_TOKEN,
      token,
    };

    expect(actions.setToken(token)).toEqual(expectedAction);
  });

  it("Set Code Action", () => {
    const code = "FakeToken";
    const expectedAction = {
      type: types.userConstants.LOGIN_SET_CODE,
      code,
    };

    expect(actions.setCode(code)).toEqual(expectedAction);
  });

  it("Logout Action", () => {
    const expectedAction = {
      type: types.userConstants.LOGOUT,
    };

    expect(actions.logout()).toEqual(expectedAction);
  });
});
