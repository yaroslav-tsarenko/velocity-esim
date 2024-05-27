import { Button } from "@mui/material";
import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`how-it-works-content-container ${className}`}>
      <div className="how-it-works-content1">
        <div className="how-it-works-header">
          <b className="how-velocitysim-works1">How VelocitySim Works</b>
        </div>
        <div className="how-it-works-steps">
          <div className="steps-container">
            <div className="steps-list">
              <div className="step-item">
                <img
                  className="gomoworld-icons-fa2-01-2048x201"
                  loading="lazy"
                  alt=""
                  src="/gomoworld-icons-fa2012048x20481png1@2x.png"
                />
                <div className="gomoworld-icons-fa2-01-2048x202" />
              </div>
              <b className="heading-44">Discover Our Service Offerings</b>
              <div className="head-to-the-container2">
                <span className="head-to-the-container3">
                  <p className="unlock-a-world1">
                    Unlock a world of possibilities.
                  </p>
                </span>
              </div>
            </div>
            <FrameComponent1 goMoWorldIconsFA2022048x2="/gomoworld-icons-fa2022048x20481png1@2x.png" />
          </div>
          <img
            className="gomoworldwebsite-device-fapng-icon1"
            loading="lazy"
            alt=""
            src="/gomoworldwebsite-device-fapng1@2x.png"
          />
          <div className="step-item1">
            <img
              className="gomoworld-icons-fa2-03-2048x201"
              loading="lazy"
              alt=""
              src="/gomoworld-icons-fa2032048x20481png1@2x.png"
            />
            <h3 className="heading-45">Install Your eSIM</h3>
            <div className="step-description">
              <p className="from-here-follow-container1">
                <span className="from-here-follow1">
                  From here, follow the instructions on
                </span>
                <span className="screen-to-install1">
                  screen to install your eSIM. Find more
                </span>
                <span className="details-on-this1">
                  details on this through the FAQs
                </span>
                <span className="below1">below.</span>
              </p>
              <div className="substep-icon">
                <img
                  className="gomoworld-icons-fa2-04-2048x201"
                  loading="lazy"
                  alt=""
                  src="/gomoworld-icons-fa2042048x20481png1@2x.png"
                />
              </div>
              <div className="step-item2">
                <b className="heading-46">Activate Your eSIM</b>
                <p className="once-you-reach-container1">
                  <span className="once-you-reach1">
                    Once you reach your destination
                  </span>
                  <span className="country-tap-to1">
                    country, tap to open the VelocitySim
                  </span>
                  <span className="app-and-go1">app and Go!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="setup-video-button-container">
          <Button
            className="button7"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#0066ff",
              fontSize: "12.6",
              background: "#fff",
              border: "#0066ff solid 2px",
              borderRadius: "30px",
              "&:hover": { background: "#fff" },
              width: 192.3,
              height: 54,
            }}
          >
            View Setup Video
          </Button>
        </div>
      </div>
    </section>
  );
};



export default FrameComponent2;
