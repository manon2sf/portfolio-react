/**
 * Home.js - Home component
 */

/* Modules and components imports */
import React from "react";
import Parcours from "./Parcours/Parcours";
import Portfolio from "./Portfolio/Portfolio";
import Competences from "./Competences/Competences";

/* Styles imports */
import "./style.scss";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import Icon from "react-materialize/lib/Icon";

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
            <h1 className="secondary-txt">Manon de Saint-Ferréol</h1>
            <h2 className="secondary-txt">Développeuse Web</h2>
            <h3 className="secondary-txt">Fullstack Javascript</h3>
          </div>
        </Flip>
        <Fade delay={1000}>
          <div id="arrowContainer" className="center">
            <a href="#a-propos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                fill="white"
                width="47px"
                height="47px"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                  <path d="M12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8S7.59,4,12,4 M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10 c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2L12,2z M13,12l0-4h-2l0,4H8l4,4l4-4H13z" />
                </g>
              </svg>
            </a>
          </div>
        </Fade>
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
                  <img
                    className="profil-picture"
                    src="/img/profil.jpg"
                    alt="Manon de Saint Ferréol développeuse Web"
                  />
                </div>
              </Col>
              <Col className="col2" l={6} s={12}>
                <div className="text-container">
                  <h3 className="subtitle accent-txt">Qui suis-je ?</h3>
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
              <h3 className="subtitle accent-txt">Mon parcours</h3>
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
