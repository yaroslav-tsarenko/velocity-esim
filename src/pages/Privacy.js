import Banner2 from "../components/Banner2";
import FrameComponent2 from "../components/FrameComponent2";
import "./Privacy.css";

const Privacy = () => {
  return (
    <div className="privacy">
      <Banner2 />
      <main className="background-container">
        <section className="background7">
          <div className="background-child">
            <div className="frame-div">
              <div className="heading-1-our-privacy-policy-wrapper">
                <b className="heading-11">Our Privacy Policy</b>
              </div>
              <p className="at-velocitysim-we-container">
                <span className="at-velocitysim-we">
                  At VelocitySim, we take the protection of your data seriously.
                  We want you to feel confident that
                </span>
                <span className="we-are-keeping">
                  we are keeping your data secure, and that we handle and
                  process it in accordance with the
                </span>
                <span className="european-general-data">
                  European General Data Protection Regulation 2016/679 and the
                  ePrivacy Directive 2002/58.
                </span>
              </p>
            </div>
          </div>
          <FrameComponent2 />
        </section>
        <footer className="footer-web2">
          <div className="background8">
            <img className="logo-icon2" alt="" src="/logo-1.svg" />
            <div className="nav-menu-list4">
              <b className="item-link24">Home</b>
              <b className="item-link25">Destinations</b>
              <a
                className="item-link26"
                href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-2858"
                target="_blank"
              >
                How It Works
              </a>
              <b className="item-link27">Blog</b>
              <b className="item-link28">FAQs</b>
            </div>
          </div>
          <div className="background-parent1">
            <div className="background9">
              <div className="container2">
                <div className="rectangle" />
                <div className="link4">
                  <div className="symbol3"></div>
                </div>
                <div className="link5">
                  <div className="symbol4"></div>
                </div>
                <div className="link6">
                  <div className="symbol5"></div>
                </div>
                <div className="link7">
                  <div className="symbol6"></div>
                </div>
                <div className="link8">
                  <div className="symbol7"></div>
                </div>
                <div className="rectangle1" />
              </div>
            </div>
            <div className="background10">
              <div className="container3">
                <div className="velocitysimcom-all-wrapper">
                  <div className="velocitysimcom">
                    © 2024 VelocitySim.com     |     All Rights Reserved
                  </div>
                </div>
                <div className="container4">
                  <div className="group">
                    <div className="link-output-onlinepngtoolsp-wrapper">
                      <img
                        className="link-output-onlinepngtoolsp"
                        loading="lazy"
                        alt=""
                        src="/link--outputonlinepngtoolspng@2x.png"
                      />
                    </div>
                    <img
                      className="link-esims-io-badge-7png"
                      loading="lazy"
                      alt=""
                      src="/link--esimsiobadge7png@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background11">
            <div className="container5">
              <div className="nav-menu-list5">
                <a
                  className="item-link29"
                  href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                  target="_blank"
                >
                  News Room
                </a>
                <div className="item-link30">Legal</div>
                <a className="item-link31">Privacy Policy</a>
                <div className="item-link32">{`Terms & Conditions`}</div>
                <div className="item-link33">Cookie Policy</div>
                <div className="item-link34">Code of Practice</div>
                <div className="item-link35">Accessibility</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Privacy;
