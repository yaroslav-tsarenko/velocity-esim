import { useCallback } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Link1 from "./Link1";
import Link from "./Link";
import PropTypes from "prop-types";
import "./DestinationsContent.css";

const DestinationsContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/unitedstates");
  }, [navigate]);

  return (
    <section className={`destinations-content ${className}`}>
      <div className="destinations-container-parent">
        <div className="destinations-container">
          <div className="destinations-header">
            <b className="heading-1">Get Connected, Wherever You Go</b>
            <div className="destinations-subheading">
              <p className="select-your-destination-container">
                <span className="select-your-destination-container1">
                  <span className="select-your-destination">
                    Select your destination from the dropdown menu below and
                    choose your plan.
                  </span>
                  <span className="the-rates-you">
                    *The rates you see here are standard, see your VelocitySim
                    app for special offers!
                  </span>
                </span>
              </p>
            </div>
            <div className="destinations-form">
              <TextField
                className="form-input"
                placeholder="Search to find your destination country"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="48px" height="48px" src="/button.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#b8b8b8" },
                  "& .MuiInputBase-root": {
                    height: "52px",
                    backgroundColor: "#fff",
                    paddingRight: "2.099999999998545px",
                    borderRadius: "8px",
                    fontSize: "12.6px",
                  },
                  "& .MuiInputBase-input": { color: "#515151" },
                  width: "668.7px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="destination-links">
          <Link1
            americajpg="/americajpg@2x.png"
            heading2UnitedStates="United States"
            icon="/icon.svg"
            onLinkContainerClick={onLinkContainerClick}
          />
          <Link
            europepng="/europepng@2x.png"
            heading2Europe="Europe"
            icon="/icon-1.svg"
          />
          <div className="link18">
            <img
              className="canadapng-icon"
              loading="lazy"
              alt=""
              src="/canadapng@2x.png"
            />
            <div className="heading-2-canada-wrapper">
              <b className="heading-22">Canada</b>
            </div>
            <div className="link-child">
              <div className="from-group">
                <b className="from2">from</b>
                <div className="parent1">
                  <b className="b2">€3.99</b>
                  <div className="icon-container">
                    <img className="icon2" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="link19">
            <img
              className="indiapng-icon"
              loading="lazy"
              alt=""
              src="/indiapng@2x.png"
            />
            <div className="heading-2-india-wrapper">
              <b className="heading-23">India</b>
            </div>
            <div className="link-inner1">
              <div className="from-container">
                <b className="from3">from</b>
                <div className="parent2">
                  <b className="b3">€3.99</b>
                  <div className="icon-frame">
                    <img className="icon3" alt="" src="/icon-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="link20">
            <img
              className="mexicopng-icon"
              loading="lazy"
              alt=""
              src="/mexicopng@2x.png"
            />
            <div className="heading-2-mexico-wrapper">
              <b className="heading-24">Mexico</b>
            </div>
            <div className="link-inner2">
              <div className="from-parent1">
                <b className="from4">from</b>
                <div className="parent3">
                  <b className="b4">€3.99</b>
                  <div className="icon-wrapper1">
                    <img className="icon4" alt="" src="/icon-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="link21">
            <img
              className="japanpng-icon"
              loading="lazy"
              alt=""
              src="/japanpng@2x.png"
            />
            <div className="heading-2-japan-wrapper">
              <b className="heading-25">Japan</b>
            </div>
            <div className="link-inner3">
              <div className="from-parent2">
                <b className="from5">from</b>
                <div className="parent4">
                  <b className="b5">€3.99</b>
                  <div className="icon-wrapper2">
                    <img className="icon5" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link1
            americajpg="/australiapng@2x.png"
            heading2UnitedStates="Australia"
            icon="/icon-6.svg"
            propMinWidth="79.8px"
          />
          <Link
            europepng="/newzealandpng@2x.png"
            heading2Europe="New Zealand"
            icon="/icon-6.svg"
            propMinWidth="116.7px"
          />
          <div className="link22">
            <img
              className="perupng-icon"
              loading="lazy"
              alt=""
              src="/perupng@2x.png"
            />
            <div className="heading-2-peru-wrapper">
              <b className="heading-26">Peru</b>
            </div>
            <div className="link-inner4">
              <div className="from-parent3">
                <b className="from6">from</b>
                <div className="parent5">
                  <b className="b6">€3.99</b>
                  <div className="icon-wrapper3">
                    <img className="icon6" alt="" src="/icon-8.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link1
            americajpg="/singaporee1685539534613png@2x.png"
            heading2UnitedStates="Singapore"
            icon="/icon-1.svg"
            propMinWidth="92.1px"
          />
          <div className="link23">
            <img
              className="thailandpng-icon"
              loading="lazy"
              alt=""
              src="/thailandpng@2x.png"
            />
            <div className="heading-2-thailand-wrapper">
              <b className="heading-27">Thailand</b>
            </div>
            <div className="link-inner5">
              <div className="from-parent4">
                <b className="from7">from</b>
                <div className="parent6">
                  <b className="b7">€3.99</b>
                  <div className="icon-wrapper4">
                    <img className="icon7" alt="" src="/icon-1.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link1
            americajpg="/francepng@2x.png"
            heading2UnitedStates="France"
            icon="/icon-2.svg"
            propMinWidth="61.9px"
          />
        </div>
        <div className="browse-button-container">
          <Button
            className="button4"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#0066ff",
              fontSize: "12.3",
              borderColor: "#0066ff",
              borderRadius: "30px",
              "&:hover": { borderColor: "#0066ff" },
              width: 263.5,
            }}
          >
            Browse All 170 Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};



export default DestinationsContent;
