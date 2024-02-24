import "./styles/Navbar.css";

import { Menu } from "../Menu/Menu";
import { MenuButton } from "../Menu/MenuButton";
import { useState } from "react";
import { FC } from "react";
import { MenuDropdown } from "../Menu/MenuDropdown";
import { MenuItem } from "../Menu/MenuItem";
import { featuresArray, companyArray } from "../../data";
import { Button } from "../Button/Button";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { TfiClose } from "react-icons/tfi";

interface NavbarProps {
  onClick?: () => void;
  // children: ReactNode;
  handleCloseNavbar: () => void;

  isNavbarOn: boolean;
}

export const Navbar: FC<NavbarProps> = ({ isNavbarOn, handleCloseNavbar }) => {
  const [isFeatureOn, setFeatureOn] = useState<boolean>(false);
  const [isCompanyOn, setCompanyOn] = useState<boolean>(false);

  const handleFeatureClick = () => {
    setFeatureOn((prevOn) => !prevOn);
  };
  const handleCompanyClick = () => {
    setCompanyOn((prevOn) => !prevOn);
  };

  // const handleNavbarOpenClose = () => {
  //   setIsNavbarOn((prevOn) => !prevOn);
  // };
  return isNavbarOn ? (
    <div className="navbar--container">
      <Button className="close--btn" onClick={handleCloseNavbar}>
        <TfiClose />
      </Button>
      <Menu className="menu--container">
        <MenuButton onClick={handleFeatureClick}>
          Feature{" "}
          {isFeatureOn ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </MenuButton>
        <MenuDropdown data-testid="dropdown" isFeatureOn={isFeatureOn}>
          <ul data-testid="features-dropdown">
            {featuresArray.map((feature) => (
              <MenuItem key={feature.text}>
                <li>
                  {feature.icon}
                  <a href="#">{feature.text}</a>
                </li>
              </MenuItem>
            ))}
          </ul>
        </MenuDropdown>
        <MenuButton onClick={handleCompanyClick}>
          Company{" "}
          {isCompanyOn ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </MenuButton>
        <MenuDropdown isCompanyOn={isCompanyOn}>
          <ul data-testid="company-dropdown">
            {companyArray.map((item) => (
              <MenuItem key={item.text}>
                <li>
                  <a>{item.text}</a>
                </li>
              </MenuItem>
            ))}
          </ul>
        </MenuDropdown>
        <Button
          className="menu--btn"
          onClick={() => console.log("careers clicked")}
        >
          Careers
        </Button>
        <Button
          className="menu--btn"
          onClick={() => console.log("about clicked")}
        >
          About
        </Button>
      </Menu>
      <Button
        className="login--btn action--btn"
        onClick={() => console.log("login clicked")}
      >
        Login
      </Button>
      <Button
        className="register--btn action--btn"
        onClick={() => console.log("register clicked")}
      >
        Register
      </Button>
    </div>
  ) : null;
};
