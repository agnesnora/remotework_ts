import { Navbar } from "../components/Navbar/Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { companyArray, featuresArray } from "../data";

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

  test("All items in the features array are displayed correctly after the features button is clicked", () => {
    render(<Navbar />);
    const featuresButton = screen.getByText("Features");
    fireEvent.click(featuresButton);

    featuresArray.forEach((feature) => {
      expect(screen.getByText(feature.text)).toBeInTheDocument();
    });
  });

  test("All items in company array are displayed correctly after the company button is clickded", () => {
    render(<Navbar />);
    const companyButton = screen.getByText("Company");
    fireEvent.click(companyButton);

    companyArray.forEach((item) => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
    });
  });

  //   test("Initial state of isFeatureOn is false", () => {
  //     render(<Navbar />);
  //     expect(screen.getByTestId("features-dropdown")).not.toBeInTheDocument();
  //   });
});
