import { FC } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { MainSection } from "./components/MainSection/MainSection";
import { Companies } from "./components/Companies/Companies";
import { companyImagesArray } from "./data";
const App: FC = () => {
  const [isNavbarOn, setIsNavbarOn] = useState<boolean>(false);
  const handleOpenNavbar = () => {
    setIsNavbarOn(true);
  };
  const handleCloseNavbar = () => {
    setIsNavbarOn(false);
  };
  return (
    <>
      <div className={`app--container ${isNavbarOn ? "overlay--visible" : ""}`}>
        <Header handleOpenNavbar={handleOpenNavbar} />
        <Navbar handleCloseNavbar={handleCloseNavbar} isNavbarOn={isNavbarOn} />
        <MainSection />
        <Companies className="company--list">
          {companyImagesArray.map((image) => (
            <img src={image.src} />
          ))}
        </Companies>
      </div>
    </>
  );
};

export default App;
