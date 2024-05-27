import Banner1 from "../components/Banner1";
import DestinationsContent from "../components/DestinationsContent";
import Background1 from "../components/Background1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import "./Destinations.css";

const Destinations = () => {
  return (
    <div className="destinations">
      <Banner1 />
      <main className="background4">
        <DestinationsContent />
        <Background1 />
        <FrameComponent2 />
        <div className="background5">
          <b className="heading-31">GoDownload</b>
          <div className="roam-like-youre">Roam like you’re at home.</div>
          <div className="this-is-everything-container">
            <span className="this-is-everything-container1">
              <p className="this-is-everything">
                This is everything you love about your regular mobile
              </p>
              <p className="network-connecting-you">
                network, connecting you when you travel.
              </p>
            </span>
          </div>
          <div className="download-today-and">
            Download today and Get Data On The Go!
          </div>
        </div>
        <section className="download-content-wrapper">
          <FrameComponent goMoWorldWebsiteImageFile="/gomoworld-website-imagefiles-d204webp1@2x.png" />
        </section>
      </main>
      <footer className="footer-web1">
        <div className="background6">
          <img className="logo-icon" alt="" src="/logo-1.svg" />
          <div className="nav-menu-list1">
            <b className="item-link7">Home</b>
            <b className="item-link8">Destinations</b>
            <a
              className="item-link9"
              href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-2858"
              target="_blank"
            >
              How It Works
            </a>
            <b className="item-link10">Blog</b>
            <b className="item-link11">FAQs</b>
          </div>
        </div>
        <div className="background-group">
          <div className="background7">
            <div className="container2">
              <div className="rectangle" />
              <div className="link1">
                <h3 className="symbol"></h3>
              </div>
              <div className="link2">
                <h3 className="symbol1"></h3>
              </div>
              <div className="link3">
                <h3 className="symbol2"></h3>
              </div>
              <div className="link4">
                <h3 className="symbol3"></h3>
              </div>
              <div className="link5">
                <h3 className="symbol4"></h3>
              </div>
              <div className="rectangle1" />
            </div>
          </div>
          <div className="background8">
            <div className="container3">
              <div className="velocitysimcom-all-wrapper">
                <div className="velocitysimcom">
                  © 2024 VelocitySim.com     |     All Rights Reserved
                </div>
              </div>
              <div className="container4">
                <div className="group">
                  <div className="badge-wrapper">
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
        <div className="background9">
          <div className="container5">
            <div className="nav-menu-list2">
              <a
                className="item-link12"
                href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                target="_blank"
              >
                News Room
              </a>
              <div className="item-link13">Legal</div>
              <a className="item-link14">Privacy Policy</a>
              <div className="item-link15">{`Terms & Conditions`}</div>
              <div className="item-link16">Cookie Policy</div>
              <div className="item-link17">Code of Practice</div>
              <div className="item-link18">Accessibility</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Destinations;
