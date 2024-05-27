import { Button } from "@mui/material";
import "./Banner.css";

const Banner = ({ className = "" }) => {
  return (
    <header className={`banner ${className}`}>
      <div className="background21">
        <div className="container13">
          <div className="nav-wrapper">
            <div className="nav-menu-list6">
              <a className="item-link36">Home</a>
              <a className="item-link37">Destinations</a>
              <a className="item-link38">How It Works</a>
              <a className="item-link39">Blog</a>
              <a className="item-link40">FAQs</a>
            </div>
          </div>
          <div className="language-download-wrapper">
            <div className="language-wrapper">
              <div className="aside-language-selected-eng">
                <div className="language-image-wrapper">
                  <img
                    className="image-icon"
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
                <a className="en">EN</a>
              </div>
            </div>
            <Button
              className="button2"
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
        <img className="logo-icon3" loading="lazy" alt="" src="/logo.svg" />
      </div>
    </header>
  );
};


export default Banner;
