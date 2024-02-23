import { FC } from "react";

interface HeaderProps {
  handleOpenNavbar: () => void;
  //   isNavbarOn: boolean;
}

export const Header: FC<HeaderProps> = ({ handleOpenNavbar }) => {
  return (
    <div>
      <img src="../../../public/logo.svg" />
      <img src="../../../public/icon-menu.svg" onClick={handleOpenNavbar} />
    </div>
  );
};
