import Banner1 from "../components/Banner1";
import Background1 from "../components/Background1";
import FrameComponent1 from "../components/FrameComponent1";
import "./Video.css";

const Video = () => {
  return (
    <div className="video">
      <Banner1 />
      <Background1 />
      <footer className="footer-web">
        <div className="background2">
          <img className="logo-icon" alt="" src="/logo-1.svg" />
          <div className="nav-menu-list">
            <b className="item-link">Home</b>
            <b className="item-link1">Destinations</b>
            <a
              className="item-link2"
              href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-2858"
              target="_blank"
            >
              How It Works
            </a>
            <b className="item-link3">Blog</b>
            <b className="item-link4">FAQs</b>
          </div>
        </div>
        <FrameComponent1 />
        <div className="background3">
          <div className="container">
            <div className="nav-menu-list1">
              <a
                className="item-link5"
                href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                target="_blank"
              >
                News Room
              </a>
              <div className="item-link6">Legal</div>
              <a className="item-link7">Privacy Policy</a>
              <div className="item-link8">{`Terms & Conditions`}</div>
              <div className="item-link9">Cookie Policy</div>
              <div className="item-link10">Code of Practice</div>
              <div className="item-link11">Accessibility</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Video;
