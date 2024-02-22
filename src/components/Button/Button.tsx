import { ReactNode } from "react";
import { FC } from "react";

//Setting up a reusable button component
// Creating interface for button props
//Making button a Functional component

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  return <button {...props}>{props.children}</button>;
};

export { Button };
