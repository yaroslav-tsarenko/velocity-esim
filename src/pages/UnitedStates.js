import Banner2 from "../components/Banner2";
import HeroContent from "../components/HeroContent";
import Background2 from "../components/Background2";
import FrameComponent3 from "../components/FrameComponent3";
import FooterLinksContainer from "../components/FooterLinksContainer";
import "./UnitedStates.css";

const UnitedStates = () => {
  return (
    <div className="unitedstates">
      <Banner2 />
      <main className="background10">
        <HeroContent />
        <div className="container6" />
        <div className="container7" />
        <Background2 />
        <div className="background11">
          <b className="heading-32">GoDownload</b>
          <div className="roam-like-youre1">Roam like you’re at home.</div>
          <div className="this-is-everything-container2">
            <span className="this-is-everything-container3">
              <p className="this-is-everything1">
                This is everything you love about your regular mobile
              </p>
              <p className="network-connecting-you1">
                network, connecting you when you travel.
              </p>
            </span>
          </div>
          <div className="download-today-and1">
            Download today and Get Data On The Go!
          </div>
        </div>
        <FrameComponent3 />
      </main>
      <footer className="footer-web2">
        <div className="background12">
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
        <FooterLinksContainer />
      </footer>
    </div>
  );
};

export default UnitedStates;
