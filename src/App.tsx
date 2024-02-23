import { FC } from "react";
import { DropdownButton } from "./components/DropdownButton/DropdownButton";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

const App: FC = () => {
  return (
    <>
      <div>Cilike</div>
      <DropdownButton onClick={() => console.log("ciller")}>
        Miluska
      </DropdownButton>
      <Navbar />
    </>
  );
};

export default App;
