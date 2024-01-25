import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const navRef = useRef();

  const toggleNav = () => {
    navRef.current.classList.toggle('nav-active');
  };

  return (

  <header>
    <div className="nav-container">
      <h2>Aku Järvinen</h2>
      <button className="nav-btn btn-open-nav" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
      <nav className='mobile-nav' ref={navRef}>
        <a id="nav-intro" href="#introduction" onClick={toggleNav}>
          About
        </a>
        <a id="nav-project" href="#projects" onClick={toggleNav}>
          Projektit
        </a>
        <a id="nav-contact" href="#contact" onClick={toggleNav}>
          Yhteystiedot
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
