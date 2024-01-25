const Projects = () => {
  return (
    <div id="projects">
      <h1>Projektit</h1>
      <div id="section-row">
        <div id="section-text">
          <div className="content">
            <h2>ICT-infrastruktuuri pilvialustalla lopputyö</h2>
            <p>
              AWS CloudFormation-templaatti skaalautuvan Minecraft-palvelinympäristön
              luomiseen Amazon Web Services -alustalla. Mallin tavoitteena oli
              luoda korkeasti käytettävä oleva infrastruktuuri.
            </p>
            <p>
              <a href="https://github.com/Akunen/ICT-Infrastructure-AWS">
              https://github.com/Akunen/ICT-Infrastructure-AWS
              </a>
            </p>
          </div>
          <div className="section-technology">
            <ul className="tech-tags">
              <li className="tag">AWS</li>
              <li className="tag">AWS EC2</li>
              <li className="tag">VPC</li>
              <li className="tag">AWS IAM</li>
              <li className="tag">AWS Cloudformation</li>
            </ul>
          </div>
        </div>
        <div id="section-text">
          <div className="content">
            <h2>Blogisovellus Reactilla ja Node.js:llä</h2>
            <p>
              FullstackOpen-kurssin aikana luotu yksinkertainen blogilista.
              Käyttää Reactia käyttöliittymässä ja Node.js:ää palvelinpuolella.
              Sovellus mahdollistaa blogien lukemisen, omien blogien lisäämisen
              ja tykkäysten antamisen.
            </p>
            <p>
              <a href="https://github.com/Akunen/Blog-fullstack">
                https://github.com/Akunen/Blog-fullstack
              </a>
            </p>
          </div>
          <div className="section-technology">
            <ul className="tech-tags">
              <li className="tag">React.js</li>
              <li className="tag">Node.js</li>
              <li className="tag">Express.js</li>
              <li className="tag">MongoDb</li>
              <li className="tag">JWT</li>
              <li className="tag">Jest</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="section-row">
        <div id="section-text">
          <div className="content">
            <h2>Maatieto sovellus Reactilla</h2>
            <p>
              Sovellus, joka on luotu FullstackOpen-kurssin aikana. Tämä
              sovellus mahdollistaa käyttäjille maiden hakemisen ja näyttää
              perustiedot haetusta maasta, kuten maan lipun ja sään.
            </p>
            <p>
              <a href="https://github.com/Akunen/country-info">
                https://github.com/Akunen/country-info
              </a>
            </p>
          </div>
          <div className="section-technology">
            <ul className="tech-tags">
              <li className="tag">React.js</li>
              <li className="tag">Axios</li>
              <li className="tag">University of Helsinki Rest Countries API</li>
              <li className="tag">OpenWeatherMap API</li>
            </ul>
          </div>
        </div>
        <div id="section-text">
          <div className="content">
            <h2>Backend 1 päättötyö</h2>
            <p>
              Backend 1-kurssin aikana luotu backendi E-kirjastolle. Mahdollistaa käyttäjille kirjojen lisäämisen, poistamisen ja muokkaamisen sekä arvostelut.
            </p>
            <p>
              <a href="https://github.com/Akunen/Backend-1-final">
              https://github.com/Akunen/Backend-1-final
              </a>
            </p>
          </div>
          <div className="section-technology">
            <ul className="tech-tags">
              <li className="tag">Node.js</li>
              <li className="tag">Express.js</li>
              <li className="tag">MongoDb</li>
              <li className="tag">JWT</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
