import { FC } from "react";

import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { useState, useEffect } from "react";
import { MainSection } from "./components/MainSection/MainSection";
import { Companies } from "./components/Companies/Companies";
import { companyImagesArray } from "./data";
const App: FC = () => {
  const [isNavbarOn, setIsNavbarOn] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  const handleOpenNavbar = () => {
    setIsNavbarOn(true);
  };
  const handleCloseNavbar = () => {
    setIsNavbarOn(false);
  };
  return (
    <>
      {windowWidth < 800 ? (
        <div
          className={`app--container ${isNavbarOn ? "overlay--visible" : ""}`}
        >
          <Header
            innerWidth={windowWidth}
            handleOpenNavbar={handleOpenNavbar}
          />
          <Navbar
            innerWidth={windowWidth}
            handleCloseNavbar={handleCloseNavbar}
            isNavbarOn={isNavbarOn}
          />
          <MainSection innerWidth={windowWidth} />
          <Companies className="company--list">
            {companyImagesArray.map((image) => (
              <img src={image.src} />
            ))}
          </Companies>
        </div>
      ) : (
        <div>
          <Header
            innerWidth={windowWidth}
            handleOpenNavbar={handleOpenNavbar}
          />
          <MainSection innerWidth={windowWidth} />
        </div>
      )}
      {/* <div className={`app--container ${isNavbarOn ? "overlay--visible" : ""}`}>
        <Header handleOpenNavbar={handleOpenNavbar} />
        <Navbar handleCloseNavbar={handleCloseNavbar} isNavbarOn={isNavbarOn} />
        <MainSection />
        <Companies className="company--list">
          {companyImagesArray.map((image) => (
            <img src={image.src} />
          ))}
        </Companies>
      </div> */}
    </>
  );
};

export default App;
