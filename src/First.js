import "./styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import hero from "./image/hero1.png";
import box1 from "./image/box.svg";
export default function First() {
  return (
    <div className="first">
      <div className="content">
        <h1 className="heading">Be better at DSA & CP</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="content2">
          <div className="buttons">
            <button className="btn">
              {" "}
              Join now{" "}
              <ArrowForwardIcon
                id="arrow"
                sx={{ width: "1.5vw", ml: "-0.5vw" }}
              />{" "}
            </button>
            <button className="btn1"> View curriculum </button>
          </div>
          <div className="four">
            <div
              className="four1"
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "4vw"
              }}
            >
              <div
                className="four1p"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img id="bimg" src={box1} alt="boxstyle" />
                <p className="boxp">Lorem ipsum dolor sit amet</p>
              </div>
              <div
                className="four1p"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img id="bimg" src={box1} alt="boxstyle" />
                <p className="boxp">Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <div
              className="four2"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                className="four1p"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img id="bimg" src={box1} alt="boxstyle" />
                <p className="boxp">Lorem ipsum dolor sit amet</p>
              </div>
              <div
                className="four1p"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <img id="bimg" src={box1} alt="boxstyle" />
                <p className="boxp">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={hero} id="imagec1" alt="hero-image" />
      </div>
    </div>
  );
}
