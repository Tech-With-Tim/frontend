import React from "react";
import { render, screen } from "./test-utils";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { MemoryRouter, Route } from "react-router-dom";
import { cleanup } from "@testing-library/react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

describe("Renders successfully", () => {
  afterEach(cleanup);

  it("Renders Home Page", () => {
    render(
      <MemoryRouter initialEntries={[`/`]}>
        <Route path={"/"} component={Home} />
      </MemoryRouter>
    );

    const title = screen.getByText(/Tech With Tim/);
    expect(title).toBeInTheDocument();
  });

  it("Renders Login Page", () => {
    const history = createMemoryHistory();
    history.push("/login");
    render(
      <MemoryRouter initialEntries={[`/login`]}>
        <Route path={"/login"} component={Login} />
      </MemoryRouter>
    );

    const title = screen.getByText(/Login/);
    expect(title).toBeInTheDocument();
  });
});
