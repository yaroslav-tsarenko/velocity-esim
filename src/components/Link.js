import { useMemo } from "react";
import "./Link.css";

const Link = ({
  className = "",
  europepng,
  heading2Europe,
  icon,
  propMinWidth,
}) => {
  const heading21Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`link17 ${className}`}>
      <img className="europepng-icon" loading="lazy" alt="" src={europepng} />
      <div className="heading-2-europe-wrapper">
        <b className="heading-21" style={heading21Style}>
          {heading2Europe}
        </b>
      </div>
      <div className="link-inner">
        <div className="from-parent">
          <b className="from1">from</b>
          <div className="parent">
            <b className="b1">€3.99</b>
            <div className="icon-wrapper">
              <img className="icon1" alt="" src={icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Link;
