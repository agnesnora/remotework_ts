import { FC, ReactNode } from "react";

interface MenuProps {
  onClick?: () => void;
  children: ReactNode;
  className: string;
}

export const Menu: FC<MenuProps> = (props) => {
  return <div {...props}>{props.children}</div>;
};
