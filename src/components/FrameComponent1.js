import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", goMoWorldIconsFA2022048x2 }) => {
  return (
    <div className={`gomoworld-icons-fa2-02-2048x20-parent ${className}`}>
      <img
        className="gomoworld-icons-fa2-02-2048x20"
        loading="lazy"
        alt=""
        src={goMoWorldIconsFA2022048x2}
      />
      <b className="heading-43">Choose Your Destination</b>
      <p className="from-the-dropdown-container">
        <span className="from-the-dropdown">
          From the dropdown menu, choose the
        </span>
        <span className="country-youre-going">country you’re going to.</span>
      </p>
    </div>
  );
};


export default FrameComponent1;
