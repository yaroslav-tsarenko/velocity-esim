import Background2 from "./Background2";
import Background1 from "./Background1";
import Background from "./Background";
import PropTypes from "prop-types";
import "./FooterWeb1.css";

const FooterWeb1 = ({ className = "" }) => {
  return (
    <footer className={`footer-web4 ${className}`}>
      <Background2 propDebugCommit="unset" />
      <div className="background-parent8">
        <Background1
          propAlignSelf="unset"
          propDebugCommit="unset"
          propPosition="absolute"
          propTop="0px"
          propLeft="0px"
          propWidth="100%"
        />
        <Background
          propFlex="unset"
          propDebugCommit="unset"
          propPosition="absolute"
          propTop="74px"
          propLeft="0px"
          propWidth="100%"
        />
      </div>
      <div className="background32">
        <div className="container19">
          <div className="nav-menu-list9">
            <a
              className="item-link60"
              href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
              target="_blank"
            >
              News Room
            </a>
            <div className="item-link61">Legal</div>
            <a className="item-link62">Privacy Policy</a>
            <div className="item-link63">{`Terms & Conditions`}</div>
            <div className="item-link64">Cookie Policy</div>
            <div className="item-link65">Code of Practice</div>
            <div className="item-link66">Accessibility</div>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default FooterWeb1;
