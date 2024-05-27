import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <FrameComponent2
        heading="Checkout"
        loremIpsumDolorSitAmetCon="View or edit your cart before checkout"
      />
      <section className="checkout-inner">
        <form className="frame-parent">
          <FrameComponent4 />
          <FrameComponent3 />
        </form>
      </section>
      <footer className="footer-web1">
        <div className="background1">
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
          <div className="background2">
            <div className="container1">
              <div className="rectangle" />
              <div className="link">
                <div className="symbol"></div>
              </div>
              <div className="link1">
                <div className="symbol1"></div>
              </div>
              <div className="link2">
                <div className="symbol2"></div>
              </div>
              <div className="link3">
                <div className="symbol3"></div>
              </div>
              <div className="link4">
                <div className="symbol4"></div>
              </div>
              <div className="rectangle1" />
            </div>
          </div>
          <div className="background3">
            <div className="container2">
              <div className="velocitysimcom-all-wrapper">
                <div className="velocitysimcom">
                  © 2024 VelocitySim.com     |     All Rights Reserved
                </div>
              </div>
              <div className="container3">
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
        <div className="background4">
          <div className="container4">
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

export default Checkout;
