import { FC } from "react";
import { Button } from "../Button/Button";
import { Companies } from "../Companies/Companies";
import { companyImagesArray } from "../../data";
import "./styles/MainSection.css";

interface MainSectionProps {
  innerWidth: number;
}

export const MainSection: FC<MainSectionProps> = ({ innerWidth }) => {
  return (
    <div className="hero">
      {" "}
      <img
        className="hero--img"
        src={
          innerWidth < 800
            ? "/image-hero-mobile.png"
            : "/image-hero-desktop.png"
        }
      />
      {/* <div className="hero--background--img"></div> */}
      <div className="hero--left">
        <div className="hero--content">
          {" "}
          <h1>Make {innerWidth > 1024 ? <br></br> : null}remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <Button
            className="main--btn"
            onClick={() => console.log("learn more")}
          >
            Learn more
          </Button>
        </div>
        {innerWidth > 1300 ? (
          <Companies className="company--list">
            {companyImagesArray.map((image) => (
              <img src={image.src} />
            ))}
          </Companies>
        ) : null}
      </div>{" "}
      {/* {innerWidth < 1300 ? (
        <Companies className="company--list">
          {companyImagesArray.map((image) => (
            <img src={image.src} />
          ))}
        </Companies>
      ) : null} */}
    </div>
  );
};
