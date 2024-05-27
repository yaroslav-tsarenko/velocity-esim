import Banner3 from "../components/Banner3";
import FrameComponent4 from "../components/FrameComponent4";
import Background3 from "../components/Background3";
import FooterWeb from "../components/FooterWeb";
import "./HowDoesITWork.css";

const HowDoesITWork = () => {
  return (
    <div className="howdoesitwork">
      <Banner3 />
      <main className="background-container">
        <section className="background13">
          <FrameComponent4 />
          <Background3 />
          <div className="background-child">
            <div className="background-parent1">
              <div className="background14">
                <h1 className="heading-3-container">
                  <span className="heading-3-container1">
                    <p className="embark-on-a">{`Embark on a Service `}</p>
                    <p className="journey">Journey</p>
                  </span>
                </h1>
                <p className="delve-into-a">
                  Delve into a comprehensive array of offerings tailored to meet
                  your needs, whether it's innovative solutions, expert
                  consultations, or personalized support. Let us guide you
                  through our diverse suite of services to enhance your
                  experience and achieve your goals.
                </p>
              </div>
              <img
                className="gomoworld-website-imagefiles-d-icon1"
                loading="lazy"
                alt=""
                src="/gomoworld-website-imagefiles-d204webp3@2x.png"
              />
            </div>
          </div>
        </section>
        <FooterWeb />
      </main>
    </div>
  );
};

export default HowDoesITWork;
