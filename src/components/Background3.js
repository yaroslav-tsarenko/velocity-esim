import { Button } from "@mui/material";
import "./Background3.css";

const Background3 = ({ className = "" }) => {
  return (
    <div className={`background37 ${className}`}>
      <div className="background-inner3">
        <div className="heading-2-gosave-parent">
          <b className="heading-29">GoSave!</b>
          <p className="save-even-more-container1">
            <span className="save-even-more1">
              Save even more when you’re on the Go with these
            </span>
            <span className="incredible-special-offers1">
              incredible Special Offers
            </span>
          </p>
          <div className="button14">
            <b className="gosave">GoSave</b>
          </div>
        </div>
      </div>
      <div className="article3">
        <div className="overlay1" />
        <div className="here-we-velocitysim-wrapper">
          <b className="here-we-velocitysim1">Here We VelocitySim!</b>
        </div>
        <div className="from-wrapper">
          <b className="from9">From</b>
        </div>
        <div className="wrapper">
          <b className="b9">€3.99</b>
        </div>
        <div className="special-offers-for-our-launch-parent">
          <b className="special-offers-for1">
            Special offers for our launch in the US, Canada and Europe
          </b>
          <div className="button-container">
            <Button
              className="button15"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "13.1",
                borderColor: "#fff",
                borderRadius: "30px",
                "&:hover": { borderColor: "#fff" },
                width: 139.9,
              }}
            >
              GoSignUp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Background3;
