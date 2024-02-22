import { DropdownButton } from "../DropdownButton/DropdownButton";
import { FC, ReactNode } from "react";

interface MenuButtonProps {
  onClick: () => void;
  children: ReactNode;
}
export const MenuButton: FC<MenuButtonProps> = (props) => {
  return <DropdownButton {...props}>{props.children}</DropdownButton>;
};
