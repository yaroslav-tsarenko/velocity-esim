import { Button } from "@mui/material";
import "./Banner1.css";

const Banner1 = ({ className = "" }) => {
  return (
    <header className={`banner1 ${className}`}>
      <div className="background26">
        <div className="container17">
          <div className="banner-navigation">
            <div className="nav-menu-list8">
              <a className="item-link46">Home</a>
              <a className="item-link47">Destinations</a>
              <a className="item-link48">How It Works</a>
              <a className="item-link49">Blog</a>
              <a className="item-link50">FAQs</a>
            </div>
          </div>
          <div className="language-container-parent">
            <div className="language-container">
              <div className="aside-language-selected-eng1">
                <div className="language-image">
                  <img className="image-icon1" alt="" src="/image@2x.png" />
                </div>
                <a className="en1">EN</a>
              </div>
            </div>
            <Button
              className="button3"
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
        <img className="logo-icon5" loading="lazy" alt="" src="/logo.svg" />
      </div>
    </header>
  );
};


export default Banner1;
