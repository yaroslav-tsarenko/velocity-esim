import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Destinations from "./pages/Destinations";
import UnitedStates from "./pages/UnitedStates";
import HowDoesITWork from "./pages/HowDoesITWork";
import Blog from "./pages/Blog";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/destinations":
        title = "";
        metaDescription = "";
        break;
      case "/unitedstates":
        title = "";
        metaDescription = "";
        break;
      case "/howdoesitwork":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/unitedstates" element={<UnitedStates />} />
      <Route path="/howdoesitwork" element={<HowDoesITWork />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
export default App;
