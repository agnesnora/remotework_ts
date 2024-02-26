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
  handleCloseNavbar?: () => void;
  innerWidth?: number;
  isNavbarOn?: boolean;
}

export const Navbar: FC<NavbarProps> = ({ isNavbarOn, handleCloseNavbar }) => {
  const [isFeatureOn, setFeatureOn] = useState<boolean>(false);
  const [isCompanyOn, setCompanyOn] = useState<boolean>(false);

  const handleFeatureClick = () => {
    setFeatureOn(isFeatureOn ? false : true);
    setCompanyOn(false);
  };
  const handleCompanyClick = () => {
    setCompanyOn(isCompanyOn ? false : true);
    setFeatureOn(false);
  };

  return isNavbarOn ? (
    <div className="navbar--container">
      {innerWidth < 800 ? (
        <Button className="close--btn" onClick={handleCloseNavbar}>
          <TfiClose />
        </Button>
      ) : (
        ""
      )}

      <Menu className="menu--container">
        <div className="dropdown--container">
          <MenuButton
            className="features--btn"
            isFeatureOn={isFeatureOn}
            onClick={handleFeatureClick}
          >
            Feature{" "}
            {isFeatureOn ? (
              <MdOutlineKeyboardArrowUp className="arrow--icon" />
            ) : (
              <MdOutlineKeyboardArrowDown className="arrow--icon" />
            )}
          </MenuButton>
          <MenuDropdown
            className="menu--dropdown"
            data-testid="dropdown"
            isFeatureOn={isFeatureOn}
          >
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
        </div>
        <div className="dropdown--container">
          <MenuButton onClick={handleCompanyClick}>
            Company{" "}
            {isCompanyOn ? (
              <MdOutlineKeyboardArrowUp className="arrow--icon" />
            ) : (
              <MdOutlineKeyboardArrowDown className="arrow--icon" />
            )}
          </MenuButton>
          <MenuDropdown className="menu--dropdown" isCompanyOn={isCompanyOn}>
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
        </div>

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
      <div className="action--btn--container">
        {" "}
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
    </div>
  ) : null;
};
