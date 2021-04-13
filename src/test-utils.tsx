import { render as rtlRender } from "@testing-library/react";

function render(ui) {
  return rtlRender(ui);
}

export * from "@testing-library/react";
export { render };
