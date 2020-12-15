import React from 'react';
import { render, screen }from "../../test-utils";
import "@testing-library/jest-dom";
import {MemoryRouter, Route} from "react-router-dom";
import {cleanup} from "@testing-library/react";
import DiscordCallback from "./DiscordCallback";
import Home from "../Home/Home";

describe("Discord Auth", () => {
  afterEach(cleanup);

  it("Authenticate", () => {
    render(<MemoryRouter initialEntries={[`/auth/discord/callback?code=fakeCode`]}>
      <Route path={"/auth/discord/callback"} component={DiscordCallback}/>
      <Route path={"/"} component={Home}/>
    </MemoryRouter>);

    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });

  it("Redirect to home if user is authenticated", () => {
    const initialState = {
      authReducer: {
        token: "faketoken",
      }
    };
    render(<MemoryRouter initialEntries={[`/auth/discord/callback?code=fakeCode`]}>
      <Route path={"/auth/discord/callback"} component={DiscordCallback}/>
      <Route path={"/"} component={Home}/>
    </MemoryRouter>, {initialState});

    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });
});
