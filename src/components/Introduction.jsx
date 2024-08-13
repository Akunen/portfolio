import Typed from 'react-typed';

const Introduction = () => {
  return (
    <div id="introduction">
      <h1>
        <Typed
          strings={['Hello, World!', 'Hei, Maailma!']}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </h1>
      <div id="section-column">
        <div id="section-text-column">
          <h2>Kuka olen?</h2>
          <p>
          Hei! Olen Aku, tietojenkäsittelyn opiskelija Jyväskylän ammattikorkeakoulussa. Olen kovalla työmoraalilla varustettu ja luova ongelmanratkaisija, joka työskentelee sujuvasti niin itsenäisesti kuin osana tiimiä. Olen intohimoinen oppimaan uutta ja haluan tulevaisuudessa rakentaa laadukkaita, turvallisia ja käyttäjäystävällisiä sovelluksia.
          </p>
          <h2>Taidot</h2>
          <p>
          Opintojeni aikana olen aktiivisesti laajentanut osaamistani web-kehityksen eri osa-alueilla. Hallitsen web-kehityksen perustaidot ja olen erityisen kiinnostunut backend-kehityksestä sekä fullstack-ratkaisuista. Tiedän, miten käyttää erilaisia tietokantoja, ja olen syventynyt laajasti Amazon Web Services (AWS) -pilvipalveluihin.
          </p>
          <p>
          Olen hyödyntänyt AWS CDK:ta ja Serverless Frameworkia infrastruktuurin hallinnassa ja automatisoinnissa sekä käyttänyt CloudFormationia. Versionhallintaan käytän Git- ja GitHub-työkaluja, ja kehitysympäristössäni ovat tärkeässä roolissa VSCode ja Docker. Lisäksi olen suorittanut testaukseen liittyviä tehtäviä Jestin avulla. Ketterä kehitys on minulle tuttua, ja olen käyttänyt Jiraa projektinhallintaan ja tiimityöskentelyn tukena.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
