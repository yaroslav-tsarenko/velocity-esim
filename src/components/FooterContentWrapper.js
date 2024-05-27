import "./FooterContentWrapper.css";

const FooterContentWrapper = ({ className = "" }) => {
  return (
    <div className={`footer-content-wrapper ${className}`}>
      <div className="background24">
        <div className="container14">
          <div className="rectangle4" />
          <div className="link11">
            <h3 className="symbol10"></h3>
          </div>
          <div className="link12">
            <h3 className="symbol11"></h3>
          </div>
          <div className="link13">
            <h3 className="symbol12"></h3>
          </div>
          <div className="link14">
            <h3 className="symbol13"></h3>
          </div>
          <div className="link15">
            <h3 className="symbol14"></h3>
          </div>
          <div className="rectangle5" />
        </div>
      </div>
      <div className="background25">
        <div className="container15">
          <div className="velocitysimcom-all-frame">
            <div className="velocitysimcom2">
              © 2024 VelocitySim.com     |     All Rights Reserved
            </div>
          </div>
          <div className="container16">
            <div className="group2">
              <div className="trust-pilot-link">
                <img
                  className="link-output-onlinepngtoolsp2"
                  loading="lazy"
                  alt=""
                  src="/link--outputonlinepngtoolspng@2x.png"
                />
              </div>
              <img
                className="link-esims-io-badge-7png2"
                loading="lazy"
                alt=""
                src="/link--esimsiobadge7png@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FooterContentWrapper;
