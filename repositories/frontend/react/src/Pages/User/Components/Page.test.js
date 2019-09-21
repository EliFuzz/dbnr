import React from "react";
import { render } from "@testing-library/react";

import Page from "Pages/User/Components/Page";

describe("User", () => {
  it("renders header text", () => {
    const { getByText } = render(<Page />);
    expect(getByText("User")).toBeInTheDocument();
  });
});
