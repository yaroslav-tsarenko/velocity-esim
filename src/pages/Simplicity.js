import Banner1 from "../components/Banner1";
import FrameComponent1 from "../components/FrameComponent1";
import "./Simplicity.css";

const Simplicity = () => {
  return (
    <div className="simplicity">
      <Banner1 backgroundDebugCommit="unset" />
      <main className="background-group">
        <section className="background4">
          <div className="heading-1-simplicity-in-an-a-wrapper">
            <h1 className="heading-1">Simplicity in an app</h1>
          </div>
          <p className="velocitysim-is-created-container">
            <span>
              <span className="velocitysim-is-created">
                VelocitySim is created with simplicity at its core, accessing
                the best mobile networks across 160
              </span>
              <span className="countries-and-growing">
                countries and growing!
              </span>
            </span>
          </p>
        </section>
        <footer className="footer-web1">
          <div className="background5">
            <img className="logo-icon1" alt="" src="/logo-1.svg" />
            <div className="nav-menu-list2">
              <b className="item-link12">Home</b>
              <b className="item-link13">Destinations</b>
              <a
                className="item-link14"
                href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-2858"
                target="_blank"
              >
                How It Works
              </a>
              <b className="item-link15">Blog</b>
              <b className="item-link16">FAQs</b>
            </div>
          </div>
          <FrameComponent1 />
          <div className="background6">
            <div className="container1">
              <div className="nav-menu-list3">
                <a
                  className="item-link17"
                  href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                  target="_blank"
                >
                  News Room
                </a>
                <div className="item-link18">Legal</div>
                <a className="item-link19">Privacy Policy</a>
                <div className="item-link20">{`Terms & Conditions`}</div>
                <div className="item-link21">Cookie Policy</div>
                <div className="item-link22">Code of Practice</div>
                <div className="item-link23">Accessibility</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Simplicity;
