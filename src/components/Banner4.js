import { Button } from "@mui/material";
import "./Banner4.css";

const Banner4 = ({ className = "" }) => {
  return (
    <header className={`banner4 ${className}`}>
      <div className="background41">
        <div className="container31">
          <div className="nav-menu-list-container">
            <div className="nav-menu-list13">
              <a className="item-link75">Home</a>
              <a className="item-link76">Destinations</a>
              <a className="item-link77">How It Works</a>
              <a className="item-link78">Blog</a>
              <a className="item-link79">FAQs</a>
            </div>
          </div>
          <div className="frame-parent10">
            <div className="aside-language-selected-eng-container">
              <div className="aside-language-selected-eng4">
                <div className="image-container">
                  <img
                    className="image-icon4"
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
                <a className="en4">EN</a>
              </div>
            </div>
            <Button
              className="button16"
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
        <img className="logo-icon8" loading="lazy" alt="" src="/logo.svg" />
      </div>
    </header>
  );
};



export default Banner4;
