import { DropdownButton } from "../DropdownButton/DropdownButton";
import { FC, ReactNode } from "react";

interface MenuButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  isFeatureOn?: boolean;
  isCompanyOn?: boolean;
}
export const MenuButton: FC<MenuButtonProps> = ({
  onClick,
  children,
  className,
  isFeatureOn,
  isCompanyOn,
}) => {
  const dynamicStyle =
    isFeatureOn && isCompanyOn ? { left: "-170px" } : { left: "0" };

  return (
    <DropdownButton
      onClick={onClick}
      className={className}
      style={dynamicStyle}
    >
      {children}
    </DropdownButton>
  );
};
