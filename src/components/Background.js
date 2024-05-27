import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <div className={`background23 ${className}`}>
      <img className="logo-icon4" alt="" src="/logo-1.svg" />
      <div className="nav-menu-list7">
        <b className="item-link41">Home</b>
        <b className="item-link42">Destinations</b>
        <a
          className="item-link43"
          href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-2858"
          target="_blank"
        >
          How It Works
        </a>
        <b className="item-link44">Blog</b>
        <b className="item-link45">FAQs</b>
      </div>
    </div>
  );
};


export default Background;
