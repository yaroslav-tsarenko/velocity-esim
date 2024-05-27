import Banner from "../components/Banner";
import FrameComponent from "../components/FrameComponent";
import FooterWeb from "../components/FooterWeb";
import "./TechinalTrends.css";

const TechinalTrends = () => {
  return (
    <div className="techinaltrends">
      <Banner />
      <main className="background">
        <div className="content-wrapper">
          <FrameComponent />
        </div>
        <section className="share">
          <div className="share-content">
            <div className="share-title-wrapper">
              <div className="share-title-content">
                <div className="share-this-article">Share this article</div>
              </div>
              <div className="social-icons">
                <div className="social-icons-list">
                  <div className="item-link">
                    <div className="symbol"></div>
                  </div>
                  <div className="item-link1">
                    <div className="symbol1"></div>
                  </div>
                  <div className="item-link2">
                    <div className="symbol2"></div>
                  </div>
                </div>
              </div>
              <div className="separator-wrapper">
                <div className="separator" />
              </div>
              <div className="article-link">
                <div className="link">
                  <img className="icon" loading="lazy" alt="" src="/icon.svg" />
                  <div className="return-to-blog-wrapper">
                    <a
                      className="return-to-blog"
                      href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-3670"
                      target="_blank"
                    >
                      Return to Blog
                    </a>
                  </div>
                </div>
                <div className="article-link1">
                  <div className="travel-stories">Travel Stories</div>
                  <div className="where-in-the">
                    Where in the VelocitySim: Japan
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="download-cta">
            <div className="background1">
              <h2 className="heading-3-container">
                <span className="heading-3-container1">
                  <p className="embark-on-a">{`Embark on a Service `}</p>
                  <p className="journey">Journey</p>
                </span>
              </h2>
              <p className="delve-into-a">
                Delve into a comprehensive array of offerings tailored to meet
                your needs, whether it's innovative solutions, expert
                consultations, or personalized support. Let us guide you through
                our diverse suite of services to enhance your experience and
                achieve your goals.
              </p>
            </div>
            <img
              className="gomoworld-website-imagefiles-d-icon"
              loading="lazy"
              alt=""
              src="/gomoworld-website-imagefiles-d204webp@2x.png"
            />
          </div>
        </section>
      </main>
      <FooterWeb />
    </div>
  );
};

export default TechinalTrends;
