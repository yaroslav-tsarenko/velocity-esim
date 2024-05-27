import Background from "./Background";
import PropTypes from "prop-types";
import "./FooterWeb.css";

const FooterWeb = ({ className = "" }) => {
  return (
    <footer className={`footer-web4 ${className}`}>
      <Background />
      <div className="background-parent6">
        <div className="background38">
          <div className="container27">
            <div className="rectangle8" />
            <div className="link29">
              <h3 className="symbol20"></h3>
            </div>
            <div className="link30">
              <h3 className="symbol21"></h3>
            </div>
            <div className="link31">
              <h3 className="symbol22"></h3>
            </div>
            <div className="link32">
              <h3 className="symbol23"></h3>
            </div>
            <div className="link33">
              <h3 className="symbol24"></h3>
            </div>
            <div className="rectangle9" />
          </div>
        </div>
        <div className="background-wrapper">
          <div className="background39">
            <div className="container28">
              <div className="velocitysimcom-all-wrapper2">
                <div className="velocitysimcom4">
                  © 2024 VelocitySim.com     |     All Rights Reserved
                </div>
              </div>
              <div className="container29">
                <div className="group4">
                  <div className="link-output-onlinepngtoolsp-frame">
                    <img
                      className="link-output-onlinepngtoolsp4"
                      loading="lazy"
                      alt=""
                      src="/link--outputonlinepngtoolspng@2x.png"
                    />
                  </div>
                  <img
                    className="link-esims-io-badge-7png4"
                    loading="lazy"
                    alt=""
                    src="/link--esimsiobadge7png@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background40">
          <div className="container30">
            <div className="nav-menu-list12">
              <a
                className="item-link68"
                href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                target="_blank"
              >
                News Room
              </a>
              <div className="item-link69">Legal</div>
              <a className="item-link70">Privacy Policy</a>
              <div className="item-link71">{`Terms & Conditions`}</div>
              <div className="item-link72">Cookie Policy</div>
              <div className="item-link73">Code of Practice</div>
              <div className="item-link74">Accessibility</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default FooterWeb;
