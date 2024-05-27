import "./FooterLinksContainer.css";

const FooterLinksContainer = ({ className = "" }) => {
  return (
    <div className={`footer-links-container ${className}`}>
      <div className="background33">
        <div className="container22">
          <div className="rectangle6" />
          <div className="link24">
            <div className="symbol15"></div>
          </div>
          <div className="link25">
            <div className="symbol16"></div>
          </div>
          <div className="link26">
            <div className="symbol17"></div>
          </div>
          <div className="link27">
            <div className="symbol18"></div>
          </div>
          <div className="link28">
            <div className="symbol19"></div>
          </div>
          <div className="rectangle7" />
        </div>
      </div>
      <div className="background34">
        <div className="container23">
          <div className="velocitysimcom-all-wrapper1">
            <div className="velocitysimcom3">
              © 2024 VelocitySim.com     |     All Rights Reserved
            </div>
          </div>
          <div className="container24">
            <div className="group3">
              <div className="link-output-onlinepngtoolsp-container">
                <img
                  className="link-output-onlinepngtoolsp3"
                  loading="lazy"
                  alt=""
                  src="/link--outputonlinepngtoolspng@2x.png"
                />
              </div>
              <img
                className="link-esims-io-badge-7png3"
                loading="lazy"
                alt=""
                src="/link--esimsiobadge7png@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="background35">
        <div className="container25">
          <div className="nav-menu-list10">
            <a
              className="item-link56"
              href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
              target="_blank"
            >
              News Room
            </a>
            <div className="item-link57">Legal</div>
            <a className="item-link58">Privacy Policy</a>
            <div className="item-link59">{`Terms & Conditions`}</div>
            <div className="item-link60">Cookie Policy</div>
            <div className="item-link61">Code of Practice</div>
            <div className="item-link62">Accessibility</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FooterLinksContainer;
