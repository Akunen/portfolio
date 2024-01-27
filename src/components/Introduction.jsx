import Typed from 'react-typed';

const Introduction = () => {
  return (
    <div id="introduction">
      <h1>
        <Typed strings={['Hello, World!', 'Hei, Maailma!']} typeSpeed={40} backSpeed={50} loop />
      </h1>
      <div id="section-column">
        <div id="section-text-column">
          <h2>Kuka olen?</h2>
          <p>
            Minun nimeni on Aku Järvinen, olen opiskelija Jyväskylästä ja
            opiskelen tietojenkäsittelyn tradenomiksi Jyväskylän
            ammattikorkeassa. Olen luotettava, luova, pidän ongelmien
            ratkaisusta ja osaan työskennellä yksin tai osana tiimiä. Haluan
            tulevaisuudessa rakentaa laadukkaita sovelluksia ja etsin jatkuvasti
            uusia mahdollisuuksia oppia ja kasvaa kehittäjänä.
          </p>
          <h2>Taidot</h2>
          <p>
            Opintojeni aikana olen aktiivisesti kokeillut erilaisia
            web-kehitykseen liittyviä aiheita laajentaakseni osaamistani. Olen
            jo hankkinut perustiedot web-kehityksestä ja olen tutustunut moniin
            web-kehityksen osa-alueisiin, kuten frontend-tekniikoihin ja
            pilvipalveluihin. Kuitenkin matkan varrella olen huomannut vahvan
            kiinnostukseni backend-kehitykseen sekä fullstack-ratkaisuihin.
          </p>
          <p>
            Osaamiseeni kuuluu useita ohjelmointikieliä, kuten JavaScript,
            TypeScript ja Python, sekä vahva pohja web-kehityksessä HTML:n,
            CSS:n ja React.js:n parissa. Frontendin lisäksi olen syventynyt
            backend-tekniikoihin, kuten Node.js ja Express.js, sekä hyödyntänyt
            Serverless frameworkia.
          </p>
          <p>
            Tiedän, miten käyttää erilaisia tietokantoja, kuten MongoDB ja
            MySQL, ja olen tutustunut pilvipalveluihin kuten Amazon Web Services
            (AWS), käyttäen muun muassa EC2:tä, S3:sta, Lambdaa, DynamoDb:ta ja
            CloudFormationia. Olen myös perehtynyt Gitin ja GitHubin käyttöön
            versionhallinnassa. Työkalupakistani löytyvät muun muassa VSCode ja
            Docker, ja olen suorittanut testaukseen liittyviä tehtäviä Jestin
            avulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
