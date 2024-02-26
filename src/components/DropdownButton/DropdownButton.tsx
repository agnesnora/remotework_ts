import { ReactNode } from "react";
import { FC } from "react";

//Setting up a reusable button component
// Creating interface for button props
//Making button a Functional component

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const DropdownButton: FC<ButtonProps> = (props) => {
  return (
    <button className="dropdown--btn" {...props}>
      {props.children}
    </button>
  );
};

export { DropdownButton };
