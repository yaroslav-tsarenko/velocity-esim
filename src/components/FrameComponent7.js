import { Button } from "@mui/material";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={`sign-in-container ${className}`}>
      <div className="sign-in2">
        <div className="sign-up-title">
          <b className="sign-up">Sign up</b>
          <div className="sign-up-to">
            Sign up to get rewards, and many more
          </div>
        </div>
        <form className="input-fields1">
          <div className="name-address-username-fields">
            <div className="name-address-username-inputs">
              <div className="your-name">Your Name</div>
            </div>
            <div className="email-country-password-fields">
              <div className="email">Email</div>
            </div>
          </div>
          <div className="name-address-username-fields1">
            <div className="address-wrapper">
              <div className="address">Address</div>
            </div>
            <div className="country-parent">
              <div className="country1">Country</div>
              <img
                className="email-country-password-placeho"
                alt=""
                src="/email-country-password-placeholders.svg"
              />
            </div>
          </div>
          <div className="name-address-username-fields2">
            <div className="username-parent">
              <div className="username">Username</div>
              <img
                className="name-address-username-placehol"
                alt=""
                src="/frame-153-11.svg"
              />
            </div>
            <div className="password-parent">
              <div className="password1">Password</div>
              <img className="frame-icon" alt="" src="/frame-153-1.svg" />
            </div>
          </div>
          <Button
            className="button8"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#0066ff",
              borderRadius: "4px",
              "&:hover": { background: "#0066ff" },
              height: 38,
            }}
          >
            Sign up
          </Button>
        </form>
        <div className="or-sign-up">or, sign up with</div>
        <div className="social-buttons">
          <img
            className="social-icons3"
            loading="lazy"
            alt=""
            src="/frame-158.svg"
          />
          <img
            className="social-icons4"
            loading="lazy"
            alt=""
            src="/frame-158.svg"
          />
          <img
            className="social-icons5"
            loading="lazy"
            alt=""
            src="/frame-158.svg"
          />
        </div>
      </div>
    </section>
  );
};


export default FrameComponent7;
