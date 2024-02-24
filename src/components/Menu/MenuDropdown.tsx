import { FC, ReactNode } from "react";
import "./styles/MenuDropdown.css";
interface MenuDropdownProps {
  isFeatureOn?: boolean;
  isCompanyOn?: boolean;
  children: ReactNode;
  className: string;
}

export const MenuDropdown: FC<MenuDropdownProps> = ({
  isFeatureOn,
  isCompanyOn,
  children,
  className,
}) => {
  return (
    <div className={className}>
      {isFeatureOn || isCompanyOn ? children : ""}
    </div>
  );
};
