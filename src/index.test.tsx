import React from 'react';
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("Renders successfully", () => {
   render(<App />);
   // TODO: change later
   const title = screen.getByText(/Hello World/);
   expect(title).toBeInTheDocument();
});
