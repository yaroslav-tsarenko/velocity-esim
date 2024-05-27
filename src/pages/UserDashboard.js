import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent5 from "../components/FrameComponent5";
import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="userdashboard">
      <FrameComponent2
        heading="Welcome, Darnell"
        loremIpsumDolorSitAmetCon="Your Personal Dashboard"
      />
      <FrameComponent5 />
      <footer className="footer-web2">
        <div className="background5">
          <img className="logo-icon1" alt="" src="/logo-1.svg" />
          <div className="nav-menu-list3">
            <b className="item-link19">Home</b>
            <b className="item-link20">Destinations</b>
            <a
              className="item-link21"
              href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-2858"
              target="_blank"
            >
              How It Works
            </a>
            <b className="item-link22">Blog</b>
            <b className="item-link23">FAQs</b>
          </div>
        </div>
        <div className="background-container">
          <div className="background6">
            <div className="container5">
              <div className="rectangle2" />
              <div className="link5">
                <div className="symbol5"></div>
              </div>
              <div className="link6">
                <div className="symbol6"></div>
              </div>
              <div className="link7">
                <div className="symbol7"></div>
              </div>
              <div className="link8">
                <div className="symbol8"></div>
              </div>
              <div className="link9">
                <div className="symbol9"></div>
              </div>
              <div className="rectangle3" />
            </div>
          </div>
          <div className="background7">
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
        <div className="background8">
          <div className="container8">
            <div className="nav-menu-list4">
              <a
                className="item-link24"
                href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                target="_blank"
              >
                News Room
              </a>
              <div className="item-link25">Legal</div>
              <a className="item-link26">Privacy Policy</a>
              <div className="item-link27">{`Terms & Conditions`}</div>
              <div className="item-link28">Cookie Policy</div>
              <div className="item-link29">Code of Practice</div>
              <div className="item-link30">Accessibility</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UserDashboard;
