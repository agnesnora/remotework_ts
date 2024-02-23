import { ReactNode } from "react";
import { FC } from "react";

//Setting up a reusable button component
// Creating interface for button props
//Making button a Functional component

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className: string;
}

const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export { Button };
