import { useCallback } from "react";
import Banner4 from "../components/Banner4";
import "./Blog.css";

const Blog = () => {
  const onLinkEdgarChaparro7HDiEkGClick = useCallback(() => {
    // Please sync "TechinalTrends" to the project
  }, []);

  return (
    <div className="blog">
      <Banner4 />
      <main className="frame-main">
        <section className="background15">
          <div className="background-inner1">
            <div className="news-tips-and-resources-about-parent">
              <b className="news-tips-and-container">
                <p className="news-tips-and">News, tips and resources about</p>
                <p className="velocitysim">VelocitySim</p>
              </b>
              <div className="on-our-news-and-insights-page-wrapper">
                <p className="on-our-news-container">
                  <span className="on-our-news">
                    On our news and insights page, you'll find informative
                    articles on the latest developments within
                  </span>
                  <span className="velocitysim-updates-on">
                    VelocitySim, updates on our services and data plans, and
                    travel tips and stories for making the
                  </span>
                  <span className="most-of-your">
                    most of your travels while staying connected on the go.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="container8" />
          <div className="frame-parent1">
            <div className="article-card-wrapper">
              <div className="article-card">
                <div className="article">
                  <img
                    className="link-edgar-chaparro-7hdi-ekg"
                    loading="lazy"
                    alt=""
                    src="/link--edgarchaparro7hdiekg11iunsplash554x315jpg@2x.png"
                    onClick={onLinkEdgarChaparro7HDiEkGClick}
                  />
                  <div className="border">
                    <div className="link-travel">Travel Stories</div>
                    <p className="the-technological-trends-container">
                      <span className="the-technological-trends">
                        The technological trends revolutionizing the travel
                      </span>
                      <span className="industry-in-2024">industry in 2024</span>
                    </p>
                  </div>
                </div>
                <div className="article1">
                  <img
                    className="link-shutterstock-1330423565"
                    loading="lazy"
                    alt=""
                    src="/link--shutterstock-1330423565554x315jpg@2x.png"
                  />
                  <div className="paragraphborder">
                    <div className="link-travel1">Travel Stories</div>
                    <b className="where-in-the">
                      Where in the VelocitySim: Japan
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="background-parent2">
              <div className="background16">
                <h2 className="heading-3-container2">
                  <span className="heading-3-container3">
                    <p className="embark-on-a1">{`Embark on a Service `}</p>
                    <p className="journey1">Journey</p>
                  </span>
                </h2>
                <p className="delve-into-a1">
                  Delve into a comprehensive array of offerings tailored to meet
                  your needs, whether it's innovative solutions, expert
                  consultations, or personalized support. Let us guide you
                  through our diverse suite of services to enhance your
                  experience and achieve your goals.
                </p>
              </div>
              <img
                className="gomoworld-website-imagefiles-d-icon2"
                loading="lazy"
                alt=""
                src="/gomoworld-website-imagefiles-d204webp4@2x.png"
              />
            </div>
          </div>
        </section>
        <footer className="footer-web3">
          <div className="background17">
            <img className="logo-icon2" alt="" src="/logo-1.svg" />
            <div className="nav-menu-list4">
              <b className="item-link24">Home</b>
              <b className="item-link25">Destinations</b>
              <a
                className="item-link26"
                href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-2858"
                target="_blank"
              >
                How It Works
              </a>
              <b className="item-link27">Blog</b>
              <b className="item-link28">FAQs</b>
            </div>
          </div>
          <div className="background-parent3">
            <div className="background18">
              <div className="container9">
                <div className="rectangle2" />
                <div className="link6">
                  <div className="symbol5"></div>
                </div>
                <div className="link7">
                  <div className="symbol6"></div>
                </div>
                <div className="link8">
                  <div className="symbol7"></div>
                </div>
                <div className="link9">
                  <div className="symbol8"></div>
                </div>
                <div className="link10">
                  <div className="symbol9"></div>
                </div>
                <div className="rectangle3" />
              </div>
            </div>
            <div className="background19">
              <div className="container10">
                <div className="velocitysimcom-all-container">
                  <div className="velocitysimcom1">
                    © 2024 VelocitySim.com     |     All Rights Reserved
                  </div>
                </div>
                <div className="container11">
                  <div className="group1">
                    <div className="link-output-onlinepngtoolsp-wrapper">
                      <img
                        className="link-output-onlinepngtoolsp1"
                        loading="lazy"
                        alt=""
                        src="/link--outputonlinepngtoolspng@2x.png"
                      />
                    </div>
                    <img
                      className="link-esims-io-badge-7png1"
                      loading="lazy"
                      alt=""
                      src="/link--esimsiobadge7png@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="background20">
            <div className="container12">
              <div className="nav-menu-list5">
                <a
                  className="item-link29"
                  href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                  target="_blank"
                >
                  News Room
                </a>
                <div className="item-link30">Legal</div>
                <a className="item-link31">Privacy Policy</a>
                <div className="item-link32">{`Terms & Conditions`}</div>
                <div className="item-link33">Cookie Policy</div>
                <div className="item-link34">Code of Practice</div>
                <div className="item-link35">Accessibility</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Blog;
