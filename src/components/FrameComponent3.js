import { Button } from "@mui/material";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section className={`how-content-wrapper ${className}`}>
      <div className="how-content">
        <div className="how-steps">
          <div className="steps-container1">
            <div className="step-items">
              <b className="how-velocitysim-works2">How VelocitySim Works</b>
            </div>
            <div className="step-illustrations">
              <div className="download-content-parent">
                <div className="download-content">
                  <div className="download-app">
                    <img
                      className="gomoworld-icons-fa2-01-2048x203"
                      loading="lazy"
                      alt=""
                      src="/gomoworld-icons-fa2012048x20481png2@2x.png"
                    />
                  </div>
                  <b className="heading-47">Discover Our Service Offerings</b>
                </div>
                <div className="head-to-the-container4">
                  <p className="unlock-a-world2">
                    Unlock a world of possibilities.
                  </p>
                </div>
              </div>
              <div className="step-columns">
                <div className="step-icons">
                  <img
                    className="gomoworld-icons-fa2-03-2048x203"
                    alt=""
                    src="/gomoworld-icons-fa2032048x20482png-1@2x.png"
                  />
                  <div className="step-titles">
                    <b className="heading-48">Install Your eSim</b>
                  </div>
                </div>
                <p className="follow-the-instructions-container">
                  <span className="follow-the-instructions">
                    Follow the instructions on screen
                  </span>
                  <span className="to-install-your">
                    to install your eSim. Find more
                  </span>
                  <span className="details-using-faq">
                    details using FAQ linked below.
                  </span>
                </p>
              </div>
              <div className="step-columns1">
                <div className="gomoworld-icons-fa2-02-2048x20-group">
                  <img
                    className="gomoworld-icons-fa2-02-2048x202"
                    alt=""
                    src="/gomoworld-icons-fa2022048x20481png-1@2x.png"
                  />
                  <div className="heading-4-your-destination-wrapper">
                    <b className="heading-49">Your Destination</b>
                  </div>
                </div>
                <p className="from-the-dropdown-container1">
                  <span className="from-the-dropdown1">
                    From the dropdown menu,
                  </span>
                  <span className="choose-the-country">
                    choose the country you’re going
                  </span>
                  <span className="to">to.</span>
                </p>
              </div>
              <div className="step-columns2">
                <div className="gomoworld-icons-fa2-04-2048x20-parent">
                  <img
                    className="gomoworld-icons-fa2-04-2048x202"
                    loading="lazy"
                    alt=""
                    src="/gomoworld-icons-fa2042048x20481png2@2x.png"
                  />
                  <div className="heading-4-activate-your-plan-wrapper">
                    <b className="heading-410">Activate Your Plan</b>
                  </div>
                </div>
                <p className="once-you-reach-container2">
                  <span>
                    <span className="once-you-reach2">
                      Once you reach your destination
                    </span>
                    <span className="country-tap-to2">
                      country, tap to open the
                    </span>
                    <span className="velocitysim-app-and">
                      VelocitySim app and Go!
                    </span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="instruction-content-parent">
          <div className="instruction-content">
            <Button
              className="button11"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#0066ff",
                fontSize: "12.3",
                background: "#fff",
                border: "#0066ff solid 2px",
                borderRadius: "30px",
                "&:hover": { background: "#fff" },
                width: 219.7,
                height: 54,
              }}
            >
              Full Instructions Here
            </Button>
          </div>
          <div className="background-parent5">
            <div className="background32">
              <h2 className="heading-3-container6">
                <span className="heading-3-container7">
                  <p className="embark-on-a3">{`Embark on a Service `}</p>
                  <p className="journey3">Journey</p>
                </span>
              </h2>
              <p className="delve-into-a3">
                Delve into a comprehensive array of offerings tailored to meet
                your needs, whether it's innovative solutions, expert
                consultations, or personalized support. Let us guide you through
                our diverse suite of services to enhance your experience and
                achieve your goals.
              </p>
            </div>
            <img
              className="gomoworld-website-imagefiles-d-icon4"
              loading="lazy"
              alt=""
              src="/gomoworld-website-imagefiles-d204webp2@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default FrameComponent3;
