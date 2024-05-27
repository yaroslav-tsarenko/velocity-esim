import "./FrameComponent.css";

const FrameComponent = ({ className = "", goMoWorldWebsiteImageFile }) => {
  return (
    <div className={`background-parent4 ${className}`}>
      <div className="background22">
        <h1 className="heading-3-container4">
          <span className="heading-3-container5">
            <p className="embark-on-a2">{`Embark on a Service `}</p>
            <p className="journey2">Journey</p>
          </span>
        </h1>
        <p className="delve-into-a2">
          Delve into a comprehensive array of offerings tailored to meet your
          needs, whether it's innovative solutions, expert consultations, or
          personalized support. Let us guide you through our diverse suite of
          services to enhance your experience and achieve your goals.
        </p>
      </div>
      <img
        className="gomoworld-website-imagefiles-d-icon3"
        loading="lazy"
        alt=""
        src={goMoWorldWebsiteImageFile}
      />
    </div>
  );
};


export default FrameComponent;
