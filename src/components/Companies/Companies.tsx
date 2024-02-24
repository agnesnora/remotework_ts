import { FC, ReactNode } from "react";

interface CompaniesProps {
  children: ReactNode;
  //   src: string;
  className: string;
}

export const Companies: FC<CompaniesProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
