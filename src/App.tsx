import { FC } from "react";
import { DropdownButton } from "./components/DropdownButton/DropdownButton";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { useState } from "react";

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
      <Header handleOpenNavbar={handleOpenNavbar} />
      <Navbar handleCloseNavbar={handleCloseNavbar} isNavbarOn={isNavbarOn} />
    </>
  );
};

export default App;
