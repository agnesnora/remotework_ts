import { Navbar } from "../components/Navbar/Navbar";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { companyArray, featuresArray } from "../data";

const isFeaturesButtonVisible = window.innerWidth < 850;
const isCompanyButtonVisible = window.innerWidth < 850;
describe("Navbar renders", () => {
  test("Navbar renders on page", () => {
    render(<Navbar />);
    expect(true).toBeTruthy();
  });

  test("Features button renders on page", () => {
    render(<Navbar />);

    if (isFeaturesButtonVisible) {
      expect(screen.getByText("Features")).toBeInTheDocument();
    } else {
      expect(screen.queryByText("Features")).toBeNull();
    }
  });

  test("Features MenuDropdown renders when Features button is clicked", () => {
    render(<Navbar />);
    if (isFeaturesButtonVisible) {
      const featuresButton = screen.getByText("Features");
      fireEvent.click(featuresButton);
      expect(screen.getByTestId("features-dropdown")).toBeInTheDocument();
    } else {
      expect(screen.queryByText("Features")).toBeNull();
    }
  });

  test("Company menudropdown renders when Company button is clicked", () => {
    render(<Navbar />);
    if (isCompanyButtonVisible) {
      const companyButton = screen.getByText("Company");
      fireEvent.click(companyButton);
      expect(screen.getByTestId("company-dropdown")).toBeInTheDocument();
    } else {
      expect(screen.queryByText("Company")).toBeNull();
    }
  });

  test("All items in the features array are displayed correctly after the features button is clicked", () => {
    render(<Navbar />);
    if (isFeaturesButtonVisible) {
      const featuresButton = screen.getByText("Features");
      fireEvent.click(featuresButton);

      featuresArray.forEach((feature) => {
        expect(screen.getByText(feature.text)).toBeInTheDocument();
      });
    } else {
      expect(screen.queryByText("Features")).toBeNull();
    }
  });

  test("All items in company array are displayed correctly after the company button is clickded", () => {
    render(<Navbar />);
    if (isCompanyButtonVisible) {
      const companyButton = screen.getByText("Company");
      fireEvent.click(companyButton);

      companyArray.forEach((item) => {
        expect(screen.getByText(item.text)).toBeInTheDocument();
      });
    } else {
      expect(screen.queryByText("Company")).toBeNull();
    }
  });
});
