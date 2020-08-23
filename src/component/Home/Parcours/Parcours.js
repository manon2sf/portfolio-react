/**
 * Parcours.js - Parcours tab component
 */

/* Modules and components imports */
import React from "react";
import Tabs from "react-materialize/lib/Tabs";
import Tab from "react-materialize/lib/Tab";
import Col from "react-materialize/lib/Col";
import Row from "react-materialize/lib/Row";

/* Styles imports */
import "./style.scss";

function Parcours(props) {
  return (
    <Tabs
      className="tab-demo z-depth-1"
      options={{
        swipeable: true,
      }}
    >
      <Tab
        active
        className="parcours-tab"
        options={{
          duration: 300,
          onShow: null,
          responsiveThreshold: Infinity,
          swipeable: false,
        }}
        title="Depuis Juin 2020"
      >
        <div>
          <h1 className="title-tab">Freelance - Développement Web</h1>
          <p className="subtitle-tab">Compétences</p>
          <ul>
            <li>Développement d'application web</li>
            <li>Développment CMS Wordpress et Prestashop</li>
            <li>Développement d'applications mobile (React Native)</li>
          </ul>
          <p className="subtitle-tab">Réalisations</p>
          <ul>
            <li>Développement d'application stack MERN</li>
            <li>
              Mises à jour de sites <span>Wordpress</span> et{" "}
              <span>Prestashop</span>
            </li>
            <li>
              Mises à jour d'application mobile <span>Cordova</span>
            </li>
          </ul>
        </div>
      </Tab>
      <Tab
        className="parcours-tab"
        options={{
          duration: 300,
          onShow: null,
          responsiveThreshold: Infinity,
          swipeable: false,
        }}
        title="Mars - Mai 2020"
      >
        <h1 className="title-tab">
          Formation Full-Stack Javascript -{" "}
          <span>
            <a href="https://lebocal.academy/" target="_blank">
              Le Bocal Academy
            </a>
          </span>
        </h1>
        <Row>
          <Col l={6} s={12}>
            <p className="subtitle-tab">Développement Front-end</p>
            <ul>
              <li>Langages HTML, CSS et Javascript</li>
              <li>React JS</li>
              <li>Responsive Design</li>
              <li>UX/UI Design</li>
            </ul>

            <p className="subtitle-tab">Développement Mobile</p>
            <ul>
              <li>React Native</li>
            </ul>
          </Col>
          <Col l={6} s={12}>
            <p className="subtitle-tab">Développement Back-end</p>
            <ul>
              <li>Algorithmique</li>
              <li>Node JS / Express (Javascript côté Back)</li>
              <li>Base de données MongoDB</li>
            </ul>
            <p className="subtitle-tab">Gestion de projets</p>
            <ul>
              <li>Méthodes AGILE / SCRUM / LEAN</li>
            </ul>
          </Col>
        </Row>
      </Tab>
      <Tab
        className="parcours-tab"
        options={{
          duration: 300,
          onShow: null,
          responsiveThreshold: Infinity,
          swipeable: false,
        }}
        title="2012 - 2020"
      >
        <h1 className="title-tab">
          Ingénieure agro - Responsable de Production - Responsable R&D
        </h1>
        <Row>
          <Col l={6} s={12}>
            <p className="subtitle-tab">Compétences</p>
            <ul>
              <li>Management</li>
              <li>Gestion de production</li>
              <li>Gestion de projets</li>
              <li>Qualité agroalimentaire</li>
            </ul>
          </Col>
          <Col l={6} s={12}>
            <p className="subtitle-tab">Réalisations</p>
            <ul>
              <li>
                Gestion d'une équipe de 30 personnes (planning, entretiens,
                recrutement
              </li>
              <li>
                Développement de produits alimentaires (recettes, prix de
                revient, mise en production)
              </li>
              <li>
                Gestion de production (plannification, amélioration continue,
                qualité)
              </li>
            </ul>
          </Col>
        </Row>
      </Tab>
    </Tabs>
  );
}

export default Parcours;
