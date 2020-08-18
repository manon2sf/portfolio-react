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
            <a href="/community">En savoir plus</a>
          </p>
        </Card>
      </Col>

      {/* Cannes is up */}
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
          title="Cannes Is Up - Application Web MERN"
        >
          <p>
            <a href="/cannesisup">En savoir plus</a>
          </p>
        </Card>
      </Col>

      {/* LeBocalgram */}
      <Col m={4} s={12}>
        <Card
          closeIcon={<Icon>close</Icon>}
          header={
            <CardTitle image="img/bocal-login.png" reveal waves="light" />
          }
          reveal={
            <div>
              <p>Application clone d'Instagram</p>
              <p>Première application Web créée lors de ma formation.</p>
            </div>
          }
          revealIcon={<Icon>more_vert</Icon>}
          title="LeBocalgram - Application Web MERN"
        >
          <p>
            <a href="/lebocalgram">En savoir plus</a>
          </p>
        </Card>
      </Col>
    </Row>
  );
}

export default Portfolio;
