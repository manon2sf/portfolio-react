/**
 * Home.js - Home component
 */

/* Modules and components imports */
import React, { useEffect } from "react";

/* Styles imports */
import "./style.scss";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import Parcours from "./Parcours/Parcours";

/* Home component */
function Home(props) {
  /**
   * Methods
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * Render
   */

  return (
    <div id="homeContainer">
      <section id="home">
        <Flip top cascade>
          <div className="home-title">
            <p className="secondary-txt">Manon de Saint-Ferréol</p>
            <h1 className="secondary-txt">Développeuse Web</h1>
            <h2 className="secondary-txt">Fullstack Javascript</h2>
          </div>
        </Flip>
      </section>
      <section id="a-propos">
        <Fade bottom cascade>
          <div className="section-container">
            <p className="title accent-txt">A propos</p>
            <Row>
              <Col className="col1" l={6} s={12}>
                photo
              </Col>
              <Col className="col2" l={6} s={12}>
                <p className="title accent-txt">Qui suis-je ?</p>
                <p>
                  Ingénieure agro-alimentaire de formation, j'ai relevé le
                  challenge d'une reconversion dans le Web début 2020 et j'en
                  suis totalement ravie !
                </p>
                <p>
                  J'ai choisi de suivre une formation Bootcamp spécialisée dans
                  le développement Web me permettant de faire du développement
                  fullstack Javascript (Stack MERN).
                </p>
                <p>
                  Phrase ce qui me plait dans le métier et double compétences{" "}
                </p>
                <p>
                  Aujourd'hui je réalise des missions en freelance et suis
                  ouverte aux opportunités aussi bien en Front-end qu'en
                  Back-end !{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <p className="title accent-txt">Mon parcours</p>
              <Parcours />
            </Row>
          </div>
        </Fade>
      </section>
      <section id="competences">
        <Fade bottom cascade>
          <div className="section-container">
            <p className="title primary-txt darken">Compétences</p>
          </div>
        </Fade>
      </section>
      <section id="projets">
        <Fade bottom cascade>
          <div className="section-container">
            <p className="title primary-txt darken">Projets</p>
          </div>
        </Fade>
      </section>
    </div>
  );
}

export default Home;
