import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`userdashboard-inner ${className}`}>
      <div className="account-header-parent">
        <div className="account-header">
          <h1 className="user-account">User Account</h1>
          <TextField
            className="header6"
            placeholder="Your Active Downloads"
            variant="outlined"
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "61px",
                backgroundColor: "#e9e8ee",
                borderRadius: "5px",
                fontSize: "24px",
              },
              "& .MuiInputBase-input": { color: "#000" },
            }}
          />
          <div className="product-details">
            <img
              className="product-image-icon1"
              loading="lazy"
              alt=""
              src="/product-image@2x.png"
            />
            <div className="e-sim-wrapper">
              <div className="e-sim1">E-Sim</div>
            </div>
            <div className="product-info">
              <div className="credit-time">
                <div className="time-label">$120.00</div>
                <div className="credits1">12 Credits</div>
              </div>
              <div className="credit-time1">
                <div className="up-time">Up Time</div>
                <div className="hrs">120 Hrs</div>
              </div>
              <div className="renewal-info">
                <img
                  className="icons-block"
                  loading="lazy"
                  alt=""
                  src="/icons-block.svg"
                />
                <div className="frame-parent10">
                  <div className="renewal-date-wrapper">
                    <div className="renewal-date">
                      <div className="next-renewal">Next Renewal</div>
                      <div className="april-2024">24 April, 2024</div>
                    </div>
                  </div>
                  <div className="cancel-renewal">
                    <div className="cancel-wrapper">
                      <div className="cancel">Cancel</div>
                    </div>
                    <div className="icons-block-parent">
                      <img
                        className="icons-block1"
                        alt=""
                        src="/icons-block-1.svg"
                      />
                      <div className="renew-wrapper">
                        <div className="renew">Renew</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="account-header-child" />
        </div>
        <div className="checkout-details6">
          <div className="header7">
            <div className="user-details">User Details</div>
          </div>
          <div className="user-information">
            <div className="user-name-parent">
              <div className="user-name">
                <div className="name">Name</div>
                <div className="darnell-roob">Darnell Roob</div>
              </div>
              <div className="user-contact-info">
                <div className="contact-labels">
                  <div className="email-address">Email Address</div>
                  <div className="darnellroobhotmailcom">
                    Darnell.Roob@hotmail.com
                  </div>
                </div>
                <div className="contact-labels1">
                  <div className="plan">Plan</div>
                  <div className="basic">Basic</div>
                </div>
                <div className="contact-labels2">
                  <div className="expiry-date">Expiry Date</div>
                  <div className="april-20241">24 April, 2024</div>
                </div>
                <div className="contact-labels3">
                  <div className="auto-renewal">Auto Renewal</div>
                  <div className="on">On</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default FrameComponent5;
