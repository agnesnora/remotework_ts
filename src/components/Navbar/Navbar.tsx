import { Menu } from "../Menu/Menu";
import { MenuButton } from "../Menu/MenuButton";
import { useState } from "react";
import { FC } from "react";
import { MenuDropdown } from "../Menu/MenuDropdown";
import { MenuItem } from "../Menu/MenuItem";
import { featuresArray, companyArray } from "../../data";

interface NavbarProps {
  onClick?: () => void;
  // children: ReactNode;
}

export const Navbar: FC<NavbarProps> = () => {
  const [isFeatureOn, setFeatureOn] = useState<boolean>(false);
  const [isCompanyOn, setCompanyOn] = useState<boolean>(false);

  const handleFeatureClick = () => {
    setFeatureOn((prevOn) => !prevOn);
  };
  const handleCompanyClick = () => {
    setCompanyOn((prevOn) => !prevOn);
  };
  return (
    <Menu>
      <MenuButton onClick={handleFeatureClick}>Features</MenuButton>
      <MenuDropdown isFeatureOn={isFeatureOn}>
        <ul>
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
      <MenuButton onClick={handleCompanyClick}>Company</MenuButton>
      <MenuDropdown isFeatureOn={isCompanyOn}>
        <ul>
          {companyArray.map((item) => (
            <MenuItem key={item.text}>
              <li>
                <a>{item.text}</a>
              </li>
            </MenuItem>
          ))}
        </ul>
      </MenuDropdown>
    </Menu>
  );
};
