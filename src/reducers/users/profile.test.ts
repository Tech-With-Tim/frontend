import profileReducer from "./profile.reducer";

describe("Auth Reducer", () => {
  it("Initial State", () => {
    expect(profileReducer(undefined, {})).toEqual({
      user: null,
      loading: false,
      error: null,
    });
  });
});
