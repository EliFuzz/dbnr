import React from "react";
import { render } from "@testing-library/react";

import Page from "Pages/Home/Components/Page";

describe("Home", () => {
  it("renders header text", () => {
    const { getByText } = render(<Page />);
    expect(getByText("Home")).toBeInTheDocument();
  });
});
