import authReducer from "./auth.reducer";
import { userConstants } from "../../constants";

describe("Auth Reducer", () => {
  it("Initial State", () => {
    expect(authReducer(undefined, {})).toEqual({
      token: null,
      error: null,
    });
  });

  it("Change Token", () => {
    expect(
      authReducer(undefined, {
        type: userConstants.LOGIN_SET_TOKEN,
        token: "fakeToken",
      })
    ).toEqual({ token: "fakeToken", error: null });
  });

  it("Logout", () => {
    expect(
      authReducer(
        { token: "FakeToken", error: null },
        { type: userConstants.LOGOUT }
      )
    ).toEqual({ error: null, token: null });
  });
});
