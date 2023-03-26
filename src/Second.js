import "./styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import rect from "./image/Rect1.svg";
import box1 from "./image/box.svg";
import azlogo from "./image/AZ-logo.svg";
import vector from "./image/Vector.svg";

export default function First() {
  return (
    <div className="second">
      <img id="vectimg" src={vector} alt="boxstyle" />
      <div className="container">
        <h2 className="cont-heading">
          Invest in skills,
          <span style={{ color: "rgb(63, 111, 193)" }}> earn 10X</span> of what
          you paid.
        </h2>
        <p className="cont-para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div
          className="points"
          style={{ display: "flex", flexDirection: "row", marginTop: "7vw" }}
        >
          <div className="points1">
            <div
              className="points11"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img id="rectimg" src={rect} alt="boxstyle" />
              <div className="rectdiv">
                <h2 className="heading2">1.2 Cr/Year</h2>
                <p className="rectp">highest fresher package</p>
              </div>
            </div>
            <div
              className="points11"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img id="rectimg" src={rect} alt="boxstyle" />
              <div className="rectdiv">
                <h2 className="heading2">1000+ Offers</h2>
                <p className="rectp">from top companies</p>
              </div>
            </div>
          </div>

          <div
            className="points1"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div
              className="points11"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img id="rectimg" src={rect} alt="boxstyle" />
              <div className="rectdiv">
                <h2 className="heading2">Multiple &lt;100 Ranks</h2>
                <p className="rectp">in kickstart last year</p>
              </div>
            </div>
            <div
              className="points11"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img id="rectimg" src={rect} alt="boxstyle" />
              <div className="rectd">
                <h2 className="heading2">Trusted by IITians</h2>
                <p className="rectp">for their career prep</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing">
        <div
          className="upperone"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="uppercontent">
            <h3 className="upperhead">Premium Victory Batch</h3>
            <h2 className="upperhead2">₹19,999</h2>
            <h1 className="upperhead3">₹13,999</h1>
          </div>
          <div>
            <img id="azimg" src={azlogo} alt="boxstyle" />
          </div>
        </div>
        <div className="lowerone">
          <div className="lcontentall">
            <div
              className="lcontent"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img id="bimg1" src={box1} alt="boxstyle" />
              <p className="boxp1">100+ Hrs Live Content</p>
            </div>
            <div
              className="lcontent"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img id="bimg1" src={box1} alt="boxstyle" />
              <p className="boxp1">50+ Hrs Contest</p>
            </div>
            <div
              className="lcontent"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img id="bimg1" src={box1} alt="boxstyle" />
              <p className="boxp1">500+ Problems</p>
            </div>
            <div
              className="lcontent"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img id="bimg1" src={box1} alt="boxstyle" />
              <p className="boxp1">
                Includes an interview bootcamp and access to a mentor network
              </p>
            </div>
            <div
              className="lcontent"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img id="bimg1" src={box1} alt="boxstyle" />
              <p className="boxp1">
                Enjoy access to our content for one year (paid extensions
                available)
              </p>
            </div>
            <div
              className="lcontent"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <img id="bimg1" src={box1} alt="boxstyle" />
              <p className="boxp1">
                Flexible payment options, including no-cost EMI, are available.
              </p>
            </div>
          </div>
          <button className="btn2">
            {" "}
            Join now{" "}
            <ArrowForwardIcon
              id="arrow"
              sx={{ width: "1.5vw", ml: "0vw" }}
            />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
