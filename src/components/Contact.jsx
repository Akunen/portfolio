import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHatWizard } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact">
      <div id="section-colum">
        <div id="section-text-row">
          <div className="content">
            <div id="contact-info">
              <h2>Yhteystiedot</h2>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="faEnvelope" />
                <a href="mailto:jarvinen.aku@gmail.com">
                  jarvinen.aku@gmail.com
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faLinkedin} className="faLinkedin" />{' '}
                <a href="https://www.linkedin.com/in/aku-j%C3%A4rvinen-23538a1b7/">
                  Aku Järvinen
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faGithub} className="faGithub" />{' '}
                <a href="https://github.com/Akunen">
                  https://github.com/Akunen
                </a>
              </p>
              <p>
                <FontAwesomeIcon icon={faHatWizard} className="faHatWizard" />{' '}
                <a href="/portfolio/assets/CV_Aku_Jarvinen.pdf" download>
                  Lataa tästä CV:ni
                </a>
              </p>
            </div>
            <div id="animation-column">
              <img
                src="/portfolio/assets/animation.gif"
                alt="animation"
                id="animation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
