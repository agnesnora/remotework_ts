import { Button } from "../Button/Button";
import "./styles/MainSection.css";
export const MainSection = () => {
  return (
    <div className="hero">
      <img className="hero--img" src="../../../public/image-hero-mobile.png" />
      <div className="hero--content">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Button className="main--btn" onClick={() => console.log("learn more")}>
          Learn more
        </Button>
      </div>
    </div>
  );
};
