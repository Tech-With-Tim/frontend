import React from "react";
import { render, screen } from "../../../test-utils";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import { cleanup } from "@testing-library/react";
import DiscordCallback from "./DiscordCallback";
import Home from "../../Home/Home";
import { of, throwError } from "rxjs";
import configureStore from "../../../store";
import Login from "../Login";

describe("Discord Auth", () => {
  afterEach(cleanup);

  it("Authenticate", () => {
    const token = "TOKEN";
    const deps = {
      ajax: {
        post: () =>
          of({
            response: {
              token,
            },
          }),
      },
    };
    const store = configureStore({}, deps);
    render(
      <MemoryRouter initialEntries={[`/auth/discord/callback?code=fakeCode`]}>
        <Route path={"/auth/discord/callback"} component={DiscordCallback} />
        <Route path={"/"} component={Home} />
      </MemoryRouter>,
      { store }
    );

    expect(screen.getByText(/Tech With Tim/)).toBeInTheDocument();
    // expect(screen.getByText(/Profile/)).toBeInTheDocument();
  });

  it("Bad Code", () => {
    const deps = {
      ajax: {
        post: () =>
          throwError({
            status: 400,
            response: { error: "Bad Request" },
          }),
      },
    };

    const store = configureStore({}, deps);

    render(
      <MemoryRouter initialEntries={[`/auth/discord/callback?code=fakeCode`]}>
        <Switch>
          <Route path={"/auth/discord/callback"} component={DiscordCallback} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/"} component={Home} />
        </Switch>
      </MemoryRouter>,
      { store }
    );

    expect(screen.getByText(/Login/)).toBeInTheDocument();
    expect(screen.getByText("Bad Request")).toBeInTheDocument();
  });

  it("Redirect to home if user is authenticated", () => {
    const initialState = {
      authReducer: {
        token: "faketoken",
      },
    };
    render(
      <MemoryRouter initialEntries={[`/auth/discord/callback?code=fakeCode`]}>
        <Route path={"/auth/discord/callback"} component={DiscordCallback} />
        <Route path={"/login"} exact component={Login} />
        <Route path={"/"} component={Home} />
      </MemoryRouter>,
      { initialState }
    );

    expect(screen.getByText(/Tech With Tim/)).toBeInTheDocument();
  });
});
