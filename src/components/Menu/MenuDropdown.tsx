import { FC, ReactNode } from "react";

interface MenuDropdownProps {
  isFeatureOn?: boolean;
  isCompanyOn?: boolean;
  children: ReactNode;
}

export const MenuDropdown: FC<MenuDropdownProps> = ({
  isFeatureOn,
  isCompanyOn,
  children,
}) => {
  return <div>{isFeatureOn || isCompanyOn ? children : ""}</div>;
};
