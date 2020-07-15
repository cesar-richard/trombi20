import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders form link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/dat form/i);
  expect(linkElement).toBeInTheDocument();
});
