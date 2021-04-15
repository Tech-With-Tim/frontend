import React from "react";

import Home from "../pages/home";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
  test("Working!", () => {
    render(<Home />);

    const title = screen.getByText(/Tech With Tim/);
    expect(title).toBeInTheDocument();
  });
});
