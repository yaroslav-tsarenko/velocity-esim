import { Button } from "@mui/material";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`background-inner2 ${className}`}>
      <div className="frame-parent5">
        <div className="how-velocitysim-works-wrapper">
          <b className="how-velocitysim-works3">How VelocitySim Works</b>
        </div>
        <div className="frame-parent6">
          <div className="frame-parent7">
            <div className="frame-parent8">
              <div className="gomoworld-icons-fa2-01-2048x20-group">
                <img
                  className="gomoworld-icons-fa2-01-2048x204"
                  loading="lazy"
                  alt=""
                  src="/gomoworld-icons-fa2012048x20481png1@2x.png"
                />
                <div className="gomoworld-icons-fa2-01-2048x205" />
              </div>
              <b className="heading-411">Discover Our Service Offerings</b>
              <div className="head-to-the-container5">
                <span className="head-to-the-container6">
                  <p className="unlock-a-world3">
                    Unlock a world of possibilities.
                  </p>
                </span>
              </div>
            </div>
            <div className="gomoworld-icons-fa2-02-2048x20-container">
              <img
                className="gomoworld-icons-fa2-02-2048x203"
                loading="lazy"
                alt=""
                src="/gomoworld-icons-fa2022048x20481png1@2x.png"
              />
              <b className="heading-412">Choose Your Destination</b>
              <p className="from-the-dropdown-container2">
                <span className="from-the-dropdown2">
                  From the dropdown menu, choose the
                </span>
                <span className="country-youre-going1">
                  country you’re going to.
                </span>
              </p>
            </div>
          </div>
          <img
            className="gomoworldwebsite-device-fapng-icon2"
            loading="lazy"
            alt=""
            src="/gomoworldwebsite-device-fapng1@2x.png"
          />
          <div className="frame-parent9">
            <div className="gomoworld-icons-fa2-03-2048x20-container">
              <img
                className="gomoworld-icons-fa2-03-2048x204"
                loading="lazy"
                alt=""
                src="/gomoworld-icons-fa2032048x20481png1@2x.png"
              />
            </div>
            <div className="heading-4-install-your-esim-container">
              <h3 className="heading-413">Install Your eSIM</h3>
            </div>
            <p className="from-here-follow-container2">
              <span className="from-here-follow2">
                From here, follow the instructions on
              </span>
              <span className="screen-to-install2">
                screen to install your eSIM. Find more
              </span>
              <span className="details-on-this2">
                details on this through the FAQs
              </span>
              <span className="below2">below.</span>
            </p>
            <div className="gomoworld-icons-fa2-04-2048x20-wrapper">
              <img
                className="gomoworld-icons-fa2-04-2048x203"
                loading="lazy"
                alt=""
                src="/gomoworld-icons-fa2042048x20481png1@2x.png"
              />
            </div>
            <div className="heading-4-activate-your-esim-wrapper">
              <b className="heading-414">Activate Your eSIM</b>
            </div>
            <p className="once-you-reach-container3">
              <span className="once-you-reach3">
                Once you reach your destination
              </span>
              <span className="country-tap-to3">
                country, tap to open the VelocitySim
              </span>
              <span className="app-and-go2">app and Go!</span>
            </p>
          </div>
        </div>
        <div className="button-wrapper">
          <Button
            className="button13"
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
    </div>
  );
};


export default FrameComponent4;
