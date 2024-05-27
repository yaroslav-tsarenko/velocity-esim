import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Banner from "../components/Banner";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Background from "../components/Background";
import FooterContentWrapper from "../components/FooterContentWrapper";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <main className="background-parent">
        <section className="background">
          <div className="background1">
            <b className="experience-the-thrill">
              Experience the Thrill of Velocity: Introducing Velocity Sim
            </b>
            <p className="dive-into-the">
              Dive into the heart-pounding world of high-speed racing and
              adrenaline-fueled action with Velocity Sim. Immerse yourself in
              realistic simulations and compete against friends or AI for the
              ultimate velocity rush!
            </p>
            <TextField
              className="input"
              placeholder="Where do you need data for?"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <img width="48px" height="48px" src="/button.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#b8b8b8" },
                "& .MuiInputBase-root": {
                  height: "52px",
                  backgroundColor: "#fff",
                  paddingRight: "2px",
                  borderRadius: "8px",
                  fontSize: "12.4px",
                },
                "& .MuiInputBase-input": { color: "#515151" },
                width: "434px",
              }}
            />
          </div>
          <div className="container" />
          <div className="background-inner">
            <div className="frame-parent">
              <div className="frame-wrapper">
                <div className="frame-group">
                  <div className="frame-container">
                    <div className="benefits-content-parent">
                      <div className="benefits-content">
                        <b className="empower-with-exceptional">
                          Empower with Exceptional Support Services
                        </b>
                        <p className="download-from-just-container">
                          <span className="download-from-just-container1">
                            <span className="our-dedicated-team">
                              Our dedicated team ensures seamless support,
                              resolving issues promptly to keep your service
                              running smoothly. Trust us for reliable assistance
                              anytime.
                            </span>
                          </span>
                        </p>
                      </div>
                      <div className="rates-link-wrapper">
                        <p className="click-through-below">
                          Click through below for rates, countries, FAQs and
                          more
                        </p>
                        <div className="link">
                          <b className="gostart">GoStart</b>
                        </div>
                      </div>
                    </div>
                    <img
                      className="container-icon"
                      loading="lazy"
                      alt=""
                      src="/container@2x.png"
                    />
                  </div>
                  <div className="sim-benefits-content">
                    <img
                      className="gomoworld-website-imagefiles-d-icon"
                      loading="lazy"
                      alt=""
                      src="/gomoworld-website-imagefiles-d203webp@2x.png"
                    />
                    <div className="background2">
                      <h1 className="heading-3">No Sim. No Worries.</h1>
                      <p className="velocitysim-connects-to-container">
                        <span className="velocitysim-connects-to">
                          VelocitySim connects to local networks through
                        </span>
                        <span className="your-phones-esim">
                          your phone’s eSIM, so there’s zero hassle with sim
                        </span>
                        <span className="cards-or-extra">
                          cards or extra phones.
                        </span>
                      </p>
                      <p className="download-the-velocitysim-container">
                        <span>
                          <span className="download-the-velocitysim">
                            Download the VelocitySim app before you travel
                          </span>
                          <span className="and-connect-from">
                            and connect from the moment you arrive.
                          </span>
                        </span>
                      </p>
                      <div className="button">
                        <b className="godownload">GoDownload</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="how-it-works-content-wrapper">
                <div className="how-it-works-content">
                  <div className="how-it-works-title-wrapper">
                    <b className="how-velocitysim-works">
                      How VelocitySim Works
                    </b>
                  </div>
                  <div className="steps-wrapper">
                    <div className="steps-content-wrapper">
                      <div className="gomoworld-icons-fa2-01-2048x20-parent">
                        <img
                          className="gomoworld-icons-fa2-01-2048x20"
                          loading="lazy"
                          alt=""
                          src="/gomoworld-icons-fa2012048x20481png@2x.png"
                        />
                        <b className="heading-4">
                          Discover Our Service Offerings
                        </b>
                        <p className="head-to-the-container">
                          <span className="head-to-the-container1">
                            <span className="unlock-a-world">
                              Unlock a world of possibilities.
                            </span>
                          </span>
                        </p>
                      </div>
                      <FrameComponent1 goMoWorldIconsFA2022048x2="/gomoworld-icons-fa2022048x20481png@2x.png" />
                    </div>
                    <img
                      className="gomoworldwebsite-device-fapng-icon"
                      loading="lazy"
                      alt=""
                      src="/gomoworldwebsite-device-fapng@2x.png"
                    />
                    <div className="gomoworld-icons-fa2-03-2048x20-parent">
                      <img
                        className="gomoworld-icons-fa2-03-2048x20"
                        loading="lazy"
                        alt=""
                        src="/gomoworld-icons-fa2032048x20481png@2x.png"
                      />
                      <div className="frame-div">
                        <div className="heading-4-install-your-esim-wrapper">
                          <h3 className="heading-41">Install Your eSIM</h3>
                        </div>
                        <p className="from-here-follow-container">
                          <span className="from-here-follow">
                            From here, follow the instructions on
                          </span>
                          <span className="screen-to-install">
                            screen to install your eSIM. Find more
                          </span>
                          <span className="details-on-this">
                            details on this through the FAQs
                          </span>
                          <span className="below">below.</span>
                        </p>
                        <img
                          className="gomoworld-icons-fa2-04-2048x20"
                          loading="lazy"
                          alt=""
                          src="/gomoworld-icons-fa2042048x20481png@2x.png"
                        />
                      </div>
                      <b className="heading-42">Activate Your eSIM</b>
                      <p className="once-you-reach-container">
                        <span className="once-you-reach">
                          Once you reach your destination
                        </span>
                        <span className="country-tap-to">
                          country, tap to open the VelocitySim
                        </span>
                        <span className="app-and-go">app and Go!</span>
                      </p>
                    </div>
                  </div>
                  <div className="setup-video-button-wrapper">
                    <Button
                      className="button1"
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
              <FrameComponent goMoWorldWebsiteImageFile="/gomoworld-website-imagefiles-d204webp@2x.png" />
            </div>
          </div>
        </section>
        <footer className="footer-web">
          <Background />
          <FooterContentWrapper />
          <div className="background3">
            <div className="container1">
              <div className="nav-menu-list">
                <a
                  className="item-link"
                  href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                  target="_blank"
                >
                  News Room
                </a>
                <div className="item-link1">Legal</div>
                <a
                  className="item-link2"
                  href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-9704"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                <div className="item-link3">{`Terms & Conditions`}</div>
                <div className="item-link4">Cookie Policy</div>
                <div className="item-link5">Code of Practice</div>
                <div className="item-link6">Accessibility</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
