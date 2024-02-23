import { FC, ReactNode } from "react";

interface MenuItemProps {
  children: ReactNode;
}

export const MenuItem: FC<MenuItemProps> = ({ children }) => {
  return <div>{children}</div>;
};
