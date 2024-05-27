import { Button } from "@mui/material";
import "./Background1.css";

const Background1 = ({ className = "" }) => {
  return (
    <section className={`background27 ${className}`}>
      <div className="go-save-content">
        <div className="go-save-header-parent">
          <div className="go-save-header">
            <div className="go-save-heading">
              <b className="heading-28">GoSave!</b>
              <p className="save-even-more-container">
                <span className="save-even-more">
                  Save even more when you’re on the Go with these
                </span>
                <span className="incredible-special-offers">
                  incredible Special Offers
                </span>
              </p>
            </div>
          </div>
          <Button
            className="button5"
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
              width: 122.8,
              height: 54,
            }}
          >
            GoSave
          </Button>
        </div>
      </div>
      <div className="article2">
        <div className="overlay" />
        <div className="testimonial-content">
          <b className="here-we-velocitysim">Here We VelocitySim!</b>
        </div>
        <div className="testimonial-author">
          <b className="from8">From</b>
        </div>
        <div className="testimonial-price">
          <b className="b8">€3.99</b>
        </div>
        <div className="special-offer">
          <b className="special-offers-for">
            Special offers for our launch in the US, Canada and Europe
          </b>
          <div className="sign-up-button-container">
            <Button
              className="button6"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "13.1",
                borderColor: "#fff",
                borderRadius: "30px",
                "&:hover": { borderColor: "#fff" },
                width: 139.9,
              }}
            >
              GoSignUp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Background1;
