import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "../../test-utils";

import { MemoryRouter, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Home from "../Home/Home";
import { act } from "react-dom/test-utils";
import configureStore from "../../store";
import { of, throwError } from "rxjs";

import { getAvatarURI } from "../../helpers";
import { cleanup } from "@testing-library/react";

describe("Profile Page", function () {
  afterEach(cleanup);

  it("Renders successfully", () => {
    const user = {
      username: "M7MD",
      avatar: "bb79ca6433f16b25c3c95eb46907f13f",
      discriminator: "6969",
      id: "601173582516584602",
    };
    const store = configureStore(
      {},
      {
        ajax: {
          get: () =>
            of({
              status: 200,
              response: user,
            }),
        },
      }
    );
    render(
      <MemoryRouter initialEntries={["/profile"]}>
        <Switch>
          <Route
            path={"/profile"}
            render={() => {
              return <Profile userid={"@me"} />;
            }}
          />
          <Route path={"/"} component={Home} />
        </Switch>
      </MemoryRouter>,
      { store }
    );

    const _user = screen.getByTestId("user-user");
    expect(_user).toBeInTheDocument();
    expect(_user.innerHTML).toBe(user.username);

    const _discriminator = screen.getByTestId("user-discriminator");
    expect(_discriminator).toBeInTheDocument();
    expect(_discriminator.innerHTML).toBe(`#${user.discriminator}`);

    const _pfp = screen.getByTestId("user-pfp");
    expect(_pfp).toBeInTheDocument();
    expect(_pfp.getAttribute("src")).toBe(
      getAvatarURI(user.id, user.avatar, { animated: true })
    );
  });

  it("Catches errors", () => {
    jest.useFakeTimers();
    const error = "Bad Request";
    const store = configureStore(
      {},
      {
        ajax: {
          get: () =>
            throwError({
              response: { error },
              status: 400,
            }),
        },
      }
    );

    render(
      <MemoryRouter initialEntries={["/profile"]}>
        <Switch>
          <Route
            path={"/profile"}
            render={() => {
              return <Profile userid={"@me"} />;
            }}
          />
          <Route path={"/"} component={Home} />
        </Switch>
      </MemoryRouter>,
      { store }
    );

    act(() => {
      jest.advanceTimersByTime(3000);
    });
  });
});
