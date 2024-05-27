import { Button } from "@mui/material";
import "./Banner2.css";

const Banner2 = ({ className = "" }) => {
  return (
    <header className={`banner2 ${className}`}>
      <div className="background28">
        <div className="container18">
          <div className="banner-navigation1">
            <div className="nav-menu-list9">
              <a className="item-link51">Home</a>
              <a className="item-link52">Destinations</a>
              <a className="item-link53">How It Works</a>
              <a className="item-link54">Blog</a>
              <a className="item-link55">FAQs</a>
            </div>
          </div>
          <div className="download-aside-parent">
            <div className="download-aside">
              <div className="aside-language-selected-eng2">
                <div className="language-image1">
                  <img
                    className="image-icon2"
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
                <a className="en2">EN</a>
              </div>
            </div>
            <Button
              className="button8"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#0066ff",
                fontSize: "13",
                background: "#fff",
                border: "#0066ff solid 2px",
                borderRadius: "30px",
                "&:hover": { background: "#fff" },
                height: 54,
              }}
            >
              GoDownload
            </Button>
          </div>
        </div>
        <img className="logo-icon6" loading="lazy" alt="" src="/logo.svg" />
      </div>
    </header>
  );
};


export default Banner2;
