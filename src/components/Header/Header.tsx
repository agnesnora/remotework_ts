import { FC } from "react";
import "./styles/Header.css";
interface HeaderProps {
  handleOpenNavbar: () => void;
  //   isNavbarOn: boolean;
}

export const Header: FC<HeaderProps> = ({ handleOpenNavbar }) => {
  return (
    <header className="mobile--header">
      <img src="../../../public/logo.svg" />
      <img src="../../../public/icon-menu.svg" onClick={handleOpenNavbar} />
    </header>
  );
};
