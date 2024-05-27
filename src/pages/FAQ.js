import Banner from "../components/Banner";
import Background3 from "../components/Background3";
import FooterWeb1 from "../components/FooterWeb1";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq">
      <Banner backgroundDebugCommit="unset" />
      <main className="background-parent">
        <Background3 />
        <FooterWeb1 />
      </main>
    </div>
  );
};

export default FAQ;
