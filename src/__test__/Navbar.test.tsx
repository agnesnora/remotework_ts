import { Navbar } from "../components/Navbar/Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Navbar renders", () => {
  test("Navbar renders on page", () => {
    render(<Navbar />);
    expect(true).toBeTruthy();
  });

  test("Features button renders on page", () => {
    render(<Navbar />);
    expect(screen.getByText("Features")).toBeInTheDocument();
  });

  test("Features MenuDropdown renders when Features button is clicked", () => {
    render(<Navbar />);
    const featuresButton = screen.getByText("Features");
    fireEvent.click(featuresButton);
    expect(screen.getByTestId("features-dropdown")).toBeInTheDocument();
  });

  test("Company menudropdown renders when Company button is clicked", () => {
    render(<Navbar />);
    const companyButton = screen.getByText("Company");
    fireEvent.click(companyButton);
    expect(screen.getByTestId("company-dropdown")).toBeInTheDocument();
  });
});
