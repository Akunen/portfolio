

import Introduction from "./Introduction";
import Projects from "./Projects";
import Contact from "./Contact";

const RightContent = () => {

  return (
    <div id="right-content">
        <div id="mobile-profile">
          <img src="/portfolio/assets/me.jpg" alt="profiilikuva" />
        </div>
            <Introduction />
            <Projects />
            <Contact />
    </div>
  );
};

export default RightContent;