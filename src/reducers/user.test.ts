import userReducer from "./user.reducer"

describe("Auth Reducer", () => {
  it("Initial State", () => {
    expect(userReducer(undefined, {})).toEqual({
      user: null,
      loading: false,
      error: null,
    });
  });
});
