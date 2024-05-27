import { useMemo } from "react";
import "./Link1.css";

const Link1 = ({
  className = "",
  americajpg,
  heading2UnitedStates,
  icon,
  propMinWidth,
  onLinkContainerClick,
}) => {
  const heading2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`link16 ${className}`} onClick={onLinkContainerClick}>
      <img className="americajpg-icon" loading="lazy" alt="" src={americajpg} />
      <div className="destination-details">
        <b className="heading-2" style={heading2Style}>
          {heading2UnitedStates}
        </b>
      </div>
      <div className="destination-prices">
        <div className="destination-labels">
          <b className="from">from</b>
          <div className="destination-currency">
            <b className="b">€3.99</b>
            <div className="destination-icons">
              <img className="icon" alt="" src={icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Link1;
