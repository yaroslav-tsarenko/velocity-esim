import "./HeroContent.css";

const HeroContent = ({ className = "" }) => {
  return (
    <section className={`hero-content ${className}`}>
      <div className="hero-image">
        <img
          className="americajpg-icon1"
          loading="lazy"
          alt=""
          src="/americajpg1@2x.png"
        />
        <div className="hero-description">
          <div className="hero-title">
            <div className="esim-for">eSim for</div>
            <b className="heading-11">United States</b>
          </div>
          <div className="data-offer">
            <b className="strong-get">Get Data On The Go from $3.99</b>
            <div className="tablist">
              <div className="tab">
                <div className="about-wrapper">
                  <a
                    className="about"
                    href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-1990"
                    target="_blank"
                  >
                    About
                  </a>
                </div>
                <div className="horizontal-divider" />
              </div>
              <div className="tab-headers">
                <a
                  className="tab-how"
                  href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-1990"
                  target="_blank"
                >
                  How to get set up
                </a>
              </div>
              <div className="tab-headers1">
                <a
                  className="tab-compatibility"
                  href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-1990"
                  target="_blank"
                >
                  Compatibility
                </a>
              </div>
            </div>
          </div>
          <div className="app-description">
            <div className="description-paragraph">
              <p className="velocitysim-is-a-container">
                <span className="velocitysim-is-a">
                  VelocitySim is a revolutionary new app that gets you connected
                </span>
                <span className="wherever-you-go">
                  wherever you go. Get data when you travel to United States
                  from the
                </span>
                <span className="moment-you-arrive">
                  moment you arrive with plans from just $3.99.
                </span>
              </p>
              <p className="simply-download-your-container">
                <span>
                  <span className="simply-download-your">
                    Simply download your travel eSIM with the VelocitySim App
                    and dodge
                  </span>
                  <span className="high-data-roaming">
                    high data roaming charges when you travel. There’s no SIM
                    and no
                  </span>
                  <span className="contract-and-no">
                    contract, and no worries! You keep your own number and use
                    you
                  </span>
                  <span className="velocitysim-travel-esim">
                    VelocitySim Travel eSIM to get data.
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className="heading-1-get-connected-parent">
            <b className="heading-12">Get Connected</b>
            <div className="plan-options">
              <div className="background29">
                <div className="plan-option-content">
                  <div className="gb-for-1999">25gb for $19.99</div>
                </div>
                <div className="separator" />
                <div className="button9">
                  <img
                    className="icon8"
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                  <div className="buy-now">Buy Now</div>
                </div>
                <div className="plan-option-descriptions">
                  <div className="all-plans-have">
                    All plans have a 30-day cycle
                  </div>
                </div>
              </div>
              <div className="background30">
                <div className="gb-for-399-wrapper">
                  <div className="gb-for-399">2gb for $3.99</div>
                </div>
                <div className="separator1" />
                <div className="button10">
                  <img className="icon9" alt="" src="/icon-11.svg" />
                  <div className="buy-now1">Buy Now</div>
                </div>
                <div className="all-plans-have-a-7-day-cycle-wrapper">
                  <div className="all-plans-have1">
                    All plans have a 7-day cycle
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default HeroContent;
