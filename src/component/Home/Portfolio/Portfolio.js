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

function Portfolio(props) {
  return (
    <Row>
      {/* community */}
      <Col m={4} s={12}>
        <Card
          closeIcon={<Icon>close</Icon>}
          header={
            <CardTitle image="img/bocal-login.png" reveal waves="light" />
          }
          reveal={
            <div>
              <p>
                Community est la plateforme pédagogique du Bocal Academy
                développée en stack MERN.
              </p>
              <p>
                J'ai travaillé comme freelance sur le développement de nouvelles
                fonctionalités pour cette application.
              </p>
            </div>
          }
          revealIcon={<Icon>more_vert</Icon>}
          title="Community - Application Web MERN"
        >
          <p>
            <Link to={process.env.PUBLIC_URL + "/community"}>en savoir +</Link>
          </p>
        </Card>
      </Col>

      {/* Cannes is up */}
      <Col m={4} s={12}>
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
          title="Cannes Is Up - Application Web MERN"
        >
          <p>
            <Link to={process.env.PUBLIC_URL + "/cannesisup"}>en savoir +</Link>
          </p>
        </Card>
      </Col>

      {/* LeBocalgram */}
      <Col m={4} s={12}>
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
          title="LeBocalgram - Application Web MERN"
        >
          <p>
            <Link to={process.env.PUBLIC_URL + "/bocalgram"}>en savoir +</Link>
          </p>
        </Card>
      </Col>
    </Row>
  );
}

export default Portfolio;
