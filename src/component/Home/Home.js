/**
 * Home.js - Home component
 */

/* Modules and components imports */
import React, { useEffect } from "react";
import Parcours from "./Parcours/Parcours";
import Portfolio from "./Portfolio/Portfolio";
import Competences from "./Competences/Competences";

/* Styles imports */
import "./style.scss";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";

/* Home component */
function Home(props) {
  /**
   * Methods
   */

  /**
   * Render
   */

  return (
    <div id="homeContainer">
      {/* header */}
      <section id="home">
        <Flip top cascade>
          <div className="home-title">
            <h2 className="secondary-txt">Manon de Saint-Ferréol</h2>
            <h1 className="secondary-txt">Développeuse Web</h1>
            <h2 className="secondary-txt">Fullstack Javascript</h2>
            <p className="secondary-txt">[En cours de construction]</p>
          </div>
        </Flip>
      </section>

      {/* A propos */}
      <section id="a-propos">
        <div className="custom-shape-divider-top-1597583459">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill-1"
            ></path>
          </svg>
        </div>

        <div className="section-container">
          <Fade bottom cascade>
            <h1 className="title primary-txt">A propos</h1>
            <Row>
              <Col className="col1" l={6} s={12}>
                <div className="picture-container">
                  <img className="profil-picture" src="/img/profil.jpg" />
                </div>
              </Col>
              <Col className="col2" l={6} s={12}>
                <div className="text-container">
                  <p className="title accent-txt">Qui suis-je ?</p>
                  <p>
                    Ingénieure agro-alimentaire de formation, j'ai relevé le
                    challenge d'une reconversion dans le Web début 2020 et j'en
                    suis totalement ravie !
                  </p>
                  <p>
                    J'ai choisi de suivre une formation Bootcamp spécialisée
                    dans le développement Web me permettant de faire du
                    développement fullstack Javascript (Stack MERN).
                  </p>
                  <p>
                    Aujourd'hui je réalise des missions en freelance et suis
                    ouverte aux opportunités aussi bien en Front-end qu'en
                    Back-end !{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Fade>
          <Fade right>
            <Row>
              <p className="title accent-txt">Mon parcours</p>
              <div className="parcours-container">
                <Parcours />
              </div>
            </Row>
          </Fade>
        </div>

        <div className="custom-shape-divider-bottom-1597584143">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* Compétences */}
      <section id="competences">
        <div className="section-container">
          <Fade bottom cascade>
            <h1 className="title secondary-txt">Compétences Techniques</h1>
          </Fade>
          <Fade bottom cascade>
            <Competences />
          </Fade>
        </div>
      </section>

      {/* Projets */}
      <section id="projets">
        <div className="custom-shape-divider-top-1597583459">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Fade bottom cascade>
          <div className="section-container">
            <h1 className="title primary-txt darken">Projets</h1>
            <Portfolio />
          </div>
        </Fade>
      </section>
    </div>
  );
}

export default Home;
