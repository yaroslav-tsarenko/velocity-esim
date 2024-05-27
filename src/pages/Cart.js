import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import Background2 from "../components/Background2";
import Background1 from "../components/Background1";
import Background from "../components/Background";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <FrameComponent2
        heading="Your Cart"
        loremIpsumDolorSitAmetCon="View or edit your cart before checkout"
      />
      <FrameComponent />
      <footer className="footer-web">
        <Background2 />
        <div className="background-parent">
          <Background1 />
          <Background />
        </div>
        <div className="background">
          <div className="container">
            <div className="nav-menu-list">
              <a
                className="item-link"
                href="https://www.figma.com/design/Yrp143rJN8zTW73NHzP1oz?node-id=3-6698"
                target="_blank"
              >
                News Room
              </a>
              <div className="item-link1">Legal</div>
              <a className="item-link2">Privacy Policy</a>
              <div className="item-link3">{`Terms & Conditions`}</div>
              <div className="item-link4">Cookie Policy</div>
              <div className="item-link5">Code of Practice</div>
              <div className="item-link6">Accessibility</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
