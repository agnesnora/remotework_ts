import { Navbar } from "../components/Navbar/Navbar";
import { render } from "@testing-library/react";

describe("Navbar renders", () => {
  test("Navbar renders on page", () => {
    render(<Navbar />);
    expect(true).toBeTruthy();
  });
});
