import { Navbar } from "../components/Navbar/Navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Navbar renders", () => {
  test("Navbar renders on page", () => {
    render(<Navbar />);
    expect(true).toBeTruthy();
  });

  test("Navbar renders on page", () => {
    render(<Navbar />);
    expect(screen.getByText("Features")).toBeInTheDocument();
  });
});
