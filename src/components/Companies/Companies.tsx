import { FC, ReactNode } from "react";
import "./styles/Companies.css";
interface CompaniesProps {
  children: ReactNode;
  //   src: string;
  className: string;
}

export const Companies: FC<CompaniesProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
