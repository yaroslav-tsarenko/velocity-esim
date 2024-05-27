import { useCallback } from "react";
import { Button } from "@mui/material";
import Banner2 from "../components/Banner2";
import "./NewsRoom.css";

const NewsRoom = () => {
  const onLinkClick = useCallback(() => {
    // Please sync "Video" to the project
  }, []);

  return (
    <div className="newsroom">
      <Banner2 />
      <main className="frame-main">
        <section className="background7">
          <div className="velocitysim-newsroom-wrapper">
            <b className="velocitysim-newsroom">VelocitySim Newsroom</b>
          </div>
          <div className="welcome-to-the-velocitysim-new-wrapper">
            <div className="welcome-to-the">
              Welcome to the VelocitySim NewsRoom.
            </div>
          </div>
          <div className="velocitysim-is-the-revolutiona-wrapper">
            <p className="velocitysim-is-the-container">
              <span className="velocitysim-is-the-container1">
                <span className="velocitysim-is-the">
                  VelocitySim is the revolutionary roaming connectivity app that
                  is changing the way people connect
                </span>
                <span className="as-they-roam">
                  as they roam the world. Keep up to date with VelocitySim news
                  as we expand across the globe!
                </span>
              </span>
            </p>
          </div>
          <div className="link-container">
            <div className="link8">
              <div className="contact-the-press-team-wrapper">
                <b className="contact-the-press">Contact the press team</b>
              </div>
              <img className="icon1" loading="lazy" alt="" src="/icon1.svg" />
            </div>
          </div>
          <div className="heading-2-press-releases-wrapper">
            <b className="heading-21">Press Releases</b>
          </div>
          <div className="background-inner">
            <div className="article-parent">
              <div className="article">
                <div className="paragraphbackground">
                  <div className="mar-9-2023">Mar 9, 2023</div>
                  <a
                    className="velocitysim-communiqu-de"
                    href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-7674"
                    target="_blank"
                  >
                    VelocitySim Communiqué de presse
                  </a>
                  <a
                    className="link-read"
                    href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-7674"
                    target="_blank"
                  >
                    Read this press release
                  </a>
                </div>
              </div>
              <div className="article1">
                <div className="background8">
                  <a className="feb-8-2023">Feb 8, 2023</a>
                  <p className="introducing-velocitysim-a-container">
                    <span className="introducing-velocitysim-a">
                      Introducing VelocitySim A Revolutionary New
                    </span>
                    <span className="global-roaming-app">
                      Global Roaming App Launches in Ireland
                    </span>
                  </p>
                  <div className="link-read1">Read this press release</div>
                </div>
              </div>
            </div>
          </div>
          <div className="heading-2-video-wrapper">
            <b className="heading-22">Video</b>
          </div>
          <div className="background-child">
            <div className="frame-parent6">
              <div className="background-parent1">
                <div className="background9">
                  <div className="overlay" />
                  <img className="button-icon" alt="" src="/button.svg" />
                </div>
                <div className="frame-wrapper3">
                  <div className="strong-simplicity-in-an-app-parent">
                    <b className="strong-simplicity">Simplicity in an app</b>
                    <div className="velocitysim-is-created">
                      VelocitySim is created with simplicity at its core,
                    </div>
                    <div className="accessing-the-best">
                      accessing the best mobile networks across 160
                    </div>
                    <div className="countries-and-growing">
                      countries and growing!
                    </div>
                  </div>
                </div>
              </div>
              <div className="background-parent2">
                <div className="background10">
                  <div className="overlay1" />
                  <img className="button-icon1" alt="" src="/button-1.svg" />
                </div>
                <div className="frame-wrapper4">
                  <div className="strong-downloading-the-app-parent">
                    <b className="strong-downloading">Downloading the app</b>
                    <div className="velocitysim-is-created1">
                      VelocitySim is created for people who love to travel and
                    </div>
                    <div className="connect-one-app">
                      connect. One app, allows you to connect to great value
                    </div>
                    <div className="roaming-across-160">
                      roaming across 160 countries and growing.
                    </div>
                  </div>
                </div>
              </div>
              <div className="background-parent3">
                <div className="background11">
                  <div className="overlay2" />
                  <img className="button-icon2" alt="" src="/button.svg" />
                </div>
                <div className="frame-wrapper5">
                  <div className="strong-what-is-an-esim-parent">
                    <b className="strong-what">What is an eSIM?</b>
                    <div className="velocitysim-harnesses-the">
                      VelocitySim harnesses the power of your embedded
                    </div>
                    <div className="esim-to-unlock">
                      eSIM to unlock a world of great value roaming. No SIM,
                    </div>
                    <div className="no-worries-download">
                      no worries, download and go!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="link-frame">
            <Button
              className="link9"
              endIcon={<img width="20.8px" height="22px" src="/icon-1.svg" />}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "12.5",
                background: "#0066ff",
                border: "#0066ff solid 2px",
                borderRadius: "30px",
                "&:hover": { background: "#0066ff" },
                width: 208.1,
              }}
              onClick={onLinkClick}
            >
              View All Videos
            </Button>
          </div>
          <div className="heading-2-brand-assets-and-m-wrapper">
            <b className="heading-23">Brand assets and materials</b>
          </div>
          <div className="gomoworld-website-imagefiles-d-parent">
            <img
              className="gomoworld-website-imagefiles-d-icon1"
              loading="lazy"
              alt=""
              src="/gomoworld-website-imagefiles-d203webp@2x.png"
            />
            <div className="background12">
              <img
                className="gomo-icon-burstsvg"
                loading="lazy"
                alt=""
                src="/gomoiconburstsvg.svg"
              />
              <b className="velocitysim-logo">{`VelocitySim Logo & Description`}</b>
              <div className="our-logo-icon-and-company-des-parent">
                <p className="our-logo-icon-container">
                  <span className="our-logo-icon">
                    Our logo, icon and company description (short and
                  </span>
                  <span className="long">long).</span>
                </p>
                <Button
                  className="link10"
                  endIcon={
                    <img width="20.8px" height="22px" src="/icon-2.svg" />
                  }
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "12.6",
                    background: "#0066ff",
                    border: "#0066ff solid 2px",
                    borderRadius: "30px",
                    "&:hover": { background: "#0066ff" },
                    width: 206.8,
                    height: 89.8,
                  }}
                >
                  Download here
                </Button>
              </div>
            </div>
          </div>
          <div className="background-parent4">
            <div className="background13">
              <img
                className="gomo-icon-burstsvg1"
                alt=""
                src="/gomoiconburstsvg.svg"
              />
              <b className="heading-31">Launch Photographs</b>
              <div className="velocitysim-press-launch-photo-parent">
                <p className="velocitysim-press-launch-container">
                  <span className="velocitysim-press-launch">
                    VelocitySim press launch photographs for web
                  </span>
                  <span className="and-print-use">and print use.</span>
                </p>
                <Button
                  className="link11"
                  endIcon={
                    <img width="20.8px" height="22px" src="/icon-3.svg" />
                  }
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "12.6",
                    background: "#0066ff",
                    border: "#0066ff solid 2px",
                    borderRadius: "30px",
                    "&:hover": { background: "#0066ff" },
                    width: 206.8,
                    height: 89.8,
                  }}
                >
                  Download here
                </Button>
              </div>
            </div>
            <img
              className="rectangle-26png-icon"
              loading="lazy"
              alt=""
              src="/rectangle26png@2x.png"
            />
          </div>
          <div className="velocitysim-coverage-wrapper">
            <b className="velocitysim-coverage">VelocitySim Coverage</b>
          </div>
          <div className="velocitysim-customers-enjoy-gl-wrapper">
            <p className="velocitysim-customers-enjoy-container">
              <span className="velocitysim-customers-enjoy-container1">
                <span className="velocitysim-customers-enjoy">
                  VelocitySim customers enjoy global, SIM-free data bundles
                  carried over the best local mobile
                </span>
                <span className="networks-in-160">
                  networks in 160 countries and is constantly expanding across
                  new destinations. With the
                </span>
                <span className="velocitysim-app-you">
                  VelocitySim app you never need to worry about going over
                  roaming allowances.
                </span>
              </span>
            </p>
          </div>
          <div className="background-wrapper">
            <div className="background14">
              <img
                className="gomoworld-map-01png-icon"
                loading="lazy"
                alt=""
                src="/gomoworld-map01png@2x.png"
              />
            </div>
          </div>
          <div className="heading-2-faqs-wrapper">
            <h2 className="heading-24">FAQs</h2>
          </div>
          <div className="border-wrapper">
            <div className="border">
              <div className="tab">
                <b className="what-is-velocitysim1">What is VelocitySim?</b>
                <div className="link-wrapper1">
                  <img className="link-icon" alt="" src="/link.svg" />
                </div>
              </div>
              <div className="border-inner">
                <div className="velocitysim-is-the-revolutiona-parent">
                  <p className="velocitysim-is-the-container2">
                    <span className="velocitysim-is-the1">
                      VelocitySim is the revolutionary new gateway to low cost,
                      high quality, global roaming, with plans
                    </span>
                    <span className="from-just-399">
                      from just €3.99! VelocitySim connects customers to the
                      very best available local partner network,
                    </span>
                    <span className="providing-access-to">
                      providing access to 4G and 5G connectivity, so you get all
                      the benefits of roaming without the high
                    </span>
                    <span className="charges">charges.</span>
                  </p>
                  <p className="velocitysim-customers-enjoy-container2">
                    <span className="velocitysim-customers-enjoy1">
                      VelocitySim customers enjoy global, SIM-free data bundles
                      carried over the best local mobile
                    </span>
                    <span className="networks-and-never">
                      networks, and never need to worry about going over roaming
                      allowances.
                    </span>
                  </p>
                  <p className="one-app-provides-container">
                    <span>
                      <span className="one-app-provides">
                        One app provides low cost travel connectivity across 160
                        countries, and VelocitySim is constantly
                      </span>
                      <span className="expanding-across-new">
                        expanding across new destinations.
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-container">
            <div className="border1">
              <div className="tab1">
                <b className="what-is-unique">
                  What is unique about VelocitySim?
                </b>
                <div className="link-wrapper2">
                  <a
                    className="link12"
                    href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                    target="_blank"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-frame">
            <div className="border2">
              <div className="tab2">
                <b className="link-can">Can I keep my number?</b>
                <div className="link-wrapper3">
                  <a
                    className="link13"
                    href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                    target="_blank"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-wrapper1">
            <div className="border3">
              <div className="tab3">
                <b className="link-so">So, how do I get started?</b>
                <div className="link-wrapper4">
                  <a
                    className="link14"
                    href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                    target="_blank"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="background15">
            <h2 className="connect-with-our-container">
              <p className="connect-with-our">Connect with our press</p>
              <p className="team-for-media">team for media questions</p>
              <p className="and-updates">and updates.</p>
            </h2>
            <div className="link-wrapper5">
              <Button
                className="link15"
                endIcon={<img width="20.8px" height="21px" src="/icon-4.svg" />}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#0066ff",
                  fontSize: "12.9",
                  background: "#fff",
                  borderRadius: "30px",
                  "&:hover": { background: "#fff" },
                  height: 56.8,
                }}
              >
                Contact the press team
              </Button>
            </div>
          </div>
        </section>
        <footer className="footer-web1">
          <div className="background16">
            <img className="logo-icon1" alt="" src="/logo-1.svg" />
            <div className="nav-menu-list2">
              <b className="item-link18">Home</b>
              <b className="item-link19">Destinations</b>
              <a
                className="item-link20"
                href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-2858"
                target="_blank"
              >
                How It Works
              </a>
              <b className="item-link21">Blog</b>
              <b className="item-link22">FAQs</b>
            </div>
          </div>
          <div className="background-parent5">
            <div className="background17">
              <div className="container5">
                <div className="rectangle2" />
                <div className="link16">
                  <div className="symbol8"></div>
                </div>
                <div className="link17">
                  <div className="symbol9"></div>
                </div>
                <div className="link18">
                  <div className="symbol10"></div>
                </div>
                <div className="link19">
                  <div className="symbol11"></div>
                </div>
                <div className="link20">
                  <div className="symbol12"></div>
                </div>
                <div className="rectangle3" />
              </div>
            </div>
            <div className="background18">
              <div className="container6">
                <div className="velocitysimcom-all-container">
                  <div className="velocitysimcom1">
                    © 2024 VelocitySim.com     |     All Rights Reserved
                  </div>
                </div>
                <div className="container7">
                  <div className="group1">
                    <div className="link-output-onlinepngtoolsp-container">
                      <img
                        className="link-output-onlinepngtoolsp1"
                        loading="lazy"
                        alt=""
                        src="/link--outputonlinepngtoolspng@2x.png"
                      />
                    </div>
                    <img
                      className="link-esims-io-badge-7png1"
                      loading="lazy"
                      alt=""
                      src="/link--esimsiobadge7png@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background19">
            <div className="container8">
              <div className="nav-menu-list3">
                <a
                  className="item-link23"
                  href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                  target="_blank"
                >
                  News Room
                </a>
                <div className="item-link24">Legal</div>
                <a className="item-link25">Privacy Policy</a>
                <div className="item-link26">{`Terms & Conditions`}</div>
                <div className="item-link27">Cookie Policy</div>
                <div className="item-link28">Code of Practice</div>
                <div className="item-link29">Accessibility</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default NewsRoom;
