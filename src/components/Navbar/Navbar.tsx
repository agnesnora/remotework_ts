import { Menu } from "../Menu/Menu";
import { MenuButton } from "../Menu/MenuButton";

export const Navbar = () => {
  return (
    <Menu>
      <MenuButton onClick={() => console.log("menubutton clicked")}>
        Features
      </MenuButton>
    </Menu>
  );
};
