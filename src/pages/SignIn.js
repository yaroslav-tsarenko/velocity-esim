import Banner from "../components/Banner";
import FrameComponent6 from "../components/FrameComponent6";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="signin">
      <Banner />
      <FrameComponent6 />
      <footer className="footer-web3">
        <div className="background9">
          <img className="logo-icon2" alt="" src="/logo-1.svg" />
          <div className="nav-menu-list5">
            <b className="item-link31">Home</b>
            <b className="item-link32">Destinations</b>
            <a
              className="item-link33"
              href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-2858"
              target="_blank"
            >
              How It Works
            </a>
            <b className="item-link34">Blog</b>
            <b className="item-link35">FAQs</b>
          </div>
        </div>
        <div className="frame-div">
          <div className="background10">
            <div className="container9">
              <div className="rectangle4" />
              <div className="link10">
                <div className="symbol10"></div>
              </div>
              <div className="link11">
                <div className="symbol11"></div>
              </div>
              <div className="link12">
                <div className="symbol12"></div>
              </div>
              <div className="link13">
                <div className="symbol13"></div>
              </div>
              <div className="link14">
                <div className="symbol14"></div>
              </div>
              <div className="rectangle5" />
            </div>
          </div>
          <div className="background11">
            <div className="container10">
              <div className="velocitysimcom-all-frame">
                <div className="velocitysimcom2">
                  © 2024 VelocitySim.com     |     All Rights Reserved
                </div>
              </div>
              <div className="container11">
                <div className="group2">
                  <div className="velocity-link-wrapper">
                    <img
                      className="link-output-onlinepngtoolsp2"
                      loading="lazy"
                      alt=""
                      src="/link--outputonlinepngtoolspng@2x.png"
                    />
                  </div>
                  <img
                    className="link-esims-io-badge-7png2"
                    loading="lazy"
                    alt=""
                    src="/link--esimsiobadge7png@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background12">
          <div className="container12">
            <div className="nav-menu-list6">
              <a
                className="item-link36"
                href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                target="_blank"
              >
                News Room
              </a>
              <div className="item-link37">Legal</div>
              <a className="item-link38">Privacy Policy</a>
              <div className="item-link39">{`Terms & Conditions`}</div>
              <div className="item-link40">Cookie Policy</div>
              <div className="item-link41">Code of Practice</div>
              <div className="item-link42">Accessibility</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;
