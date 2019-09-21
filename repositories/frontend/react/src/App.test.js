import React from "react";
import { render } from "@testing-library/react";

import App from "App";

describe("App", () => {
  it("renders header text", () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText("Home").length).toBeGreaterThan(0);
  });
});
