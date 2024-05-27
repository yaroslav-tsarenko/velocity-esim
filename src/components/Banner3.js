import { Button } from "@mui/material";
import "./Banner3.css";

const Banner3 = ({ className = "" }) => {
  return (
    <header className={`banner3 ${className}`}>
      <div className="background36">
        <div className="container26">
          <div className="nav-menu-list-wrapper">
            <div className="nav-menu-list11">
              <a className="item-link63">Home</a>
              <a className="item-link64">Destinations</a>
              <a className="item-link65">How It Works</a>
              <a className="item-link66">Blog</a>
              <a className="item-link67">FAQs</a>
            </div>
          </div>
          <div className="frame-parent4">
            <div className="aside-language-selected-eng-wrapper">
              <div className="aside-language-selected-eng3">
                <div className="image-wrapper">
                  <img
                    className="image-icon3"
                    loading="lazy"
                    alt=""
                    src="/image@2x.png"
                  />
                </div>
                <a className="en3">EN</a>
              </div>
            </div>
            <Button
              className="button12"
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
        <img className="logo-icon7" loading="lazy" alt="" src="/logo.svg" />
      </div>
    </header>
  );
};


export default Banner3;
