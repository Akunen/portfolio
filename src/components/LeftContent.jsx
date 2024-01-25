

const LeftContent = () => {

  return(
    <div id="left-content">
    <div id="profile">
      <img src='/assets/me.jpg' alt="profiilikuva" />
      <h2>Aku Järvinen</h2>
      <nav id="menu">
        <ul>
          <li>
            <a id="btn-intro" href="#introduction">
              About
            </a>
          </li>
          <li>
            <a id="btn-project" href="#projects">
              Projektit
            </a>
          </li>
          <li>
            <a id="btn-contact" href="#contact">
              Yhteystiedot
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  );
};

export default LeftContent;