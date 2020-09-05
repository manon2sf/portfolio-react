/**
 * Parcours.js - Parcours tab component
 */

/* Modules and components imports */
import React from "react";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import Icon from "react-materialize/lib/Icon";
import CardTitle from "react-materialize/lib/CardTitle";
import Card from "react-materialize/lib/Card";
import { Link } from "react-router-dom";

/* Styles imports */
import "./style.scss";

/* Component */
function Portfolio(props) {
  return (
    <Row>
      {/* community */}
      <Col l={3} m={6} s={12}>
        <Card
          closeIcon={<Icon>close</Icon>}
          header={
            <CardTitle image="img/bocal-login.jpg" reveal waves="light" />
          }
          reveal={
            <div>
              <p>
                Community est la plateforme pédagogique du Bocal Academy
                développée en stack MERN (MongoDB, Express, React, NodeJs).
              </p>
              <p>
                J'ai travaillé comme freelance sur le développement de nouvelles
                fonctionalités pour cette application.
              </p>
            </div>
          }
          revealIcon={<Icon>more_vert</Icon>}
          title="Community - Application Web MERN (MongoDB, Express, React, NodeJs)"
        >
          <p>
            <Link to={process.env.PUBLIC_URL + "/community"}>en savoir +</Link>
          </p>
        </Card>
      </Col>

      {/* Cannes is up */}
      <Col l={3} m={6} s={12}>
        <Card
          closeIcon={<Icon>close</Icon>}
          header={
            <CardTitle
              image="img/mockuper-cannesisup.png"
              reveal
              waves="light"
            />
          }
          reveal={
            <div>
              <p>Association Cannes Is Up - French Tech côte d'azur.</p>
              <ul>
                <li>Création d'un annuaire des membres de l'association</li>
                <li>
                  Création d'un espace back-office pour la gestion des membres
                </li>
              </ul>
            </div>
          }
          revealIcon={<Icon>more_vert</Icon>}
          title="Cannes Is Up - Application Web MERN (MongoDB, Express, React, NodeJs)"
        >
          <p>
            <Link to={process.env.PUBLIC_URL + "/cannesisup"}>en savoir +</Link>
          </p>
        </Card>
      </Col>

      {/* Appli Cine */}
      <Col l={3} m={6} s={12}>
        <Card
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="img/cine1.png" reveal waves="light" />}
          reveal={
            <div>
              <p>Application mobile Cinéma</p>
              <p>Première application full stack réalisée sous React Native </p>
              <ul>
                <li>Navigation à 3 niveaux</li>
                <li>The movie DataBase API</li>
                <li>Recherche de films</li>
              </ul>
            </div>
          }
          revealIcon={<Icon>more_vert</Icon>}
          title="Appli Ciné - Application mobile React Native"
        >
          <p>
            <Link to={process.env.PUBLIC_URL + "/cinema"}>en savoir +</Link>
          </p>
        </Card>
      </Col>

      {/* LeBocalgram */}
      <Col l={3} m={6} s={12}>
        <Card
          closeIcon={<Icon>close</Icon>}
          header={
            <CardTitle image="img/LeBocalGram-couv.png" reveal waves="light" />
          }
          reveal={
            <div>
              <p>Application clone d'Instagram</p>
              <p>Première application Web créée lors de ma formation.</p>
              <ul>
                <li>Développement d'un système d'authentification</li>
                <li>Publication de photos et vidéos avec commentaires</li>
                <li>Messagerie instantanée</li>
              </ul>
            </div>
          }
          revealIcon={<Icon>more_vert</Icon>}
          title="LeBocalgram - Application Web MERN (MongoDB, Express, React, NodeJs)"
        >
          <p>
            <Link to={process.env.PUBLIC_URL + "/bocalgram"}>en savoir +</Link>
          </p>
        </Card>
      </Col>

      {/* To Do list */}
      <Col l={3} m={6} s={12}>
        <Card
          closeIcon={<Icon>close</Icon>}
          header={<CardTitle image="img/toDo.jpg" reveal waves="light" />}
          reveal={
            <div>
              <p>To Do list réalisée uniquement avec Javascript, HTML et CSS</p>
            </div>
          }
          revealIcon={<Icon>more_vert</Icon>}
          title="To Do List - Javascript Vanilla"
        >
          <p>
            <Link to={process.env.PUBLIC_URL + "/todolist"}>en savoir +</Link>
          </p>
        </Card>
      </Col>
    </Row>
  );
}

export default Portfolio;
