/**
 * Competences.js - Competences component
 */

/* Modules and components imports */
import React from "react";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import Collection from "react-materialize/lib/Collection";
import CollectionItem from "react-materialize/lib/CollectionItem";
import Icon from "react-materialize/lib/Icon";

/* Styles imports */
import "./style.scss";

function Competences(props) {
  return (
    <Row id="competencesContainer">
      <Col className="collection-container" s={12} m={6} l={3}>
        <Row className="competences-collection">
          <Col>
            <Collection header="Front-end">
              <CollectionItem>
                Javascript ES6
                <a
                  className="secondary-content"
                  href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
              <CollectionItem>
                HTML5
                <a
                  className="secondary-content"
                  href="https://developer.mozilla.org/fr/docs/Web/HTML"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
              <CollectionItem>
                CSS3 / Sass
                <a
                  className="secondary-content"
                  href="https://developer.mozilla.org/fr/docs/Web/CSS"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
              <CollectionItem>
                React
                <a
                  className="secondary-content"
                  href="https://fr.reactjs.org"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
              <CollectionItem>
                React Native
                <a
                  className="secondary-content"
                  href="https://reactnative.dev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
              <CollectionItem>
                Bootstrap / Materialize
                <a
                  className="secondary-content"
                  href="https://getbootstrap.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
            </Collection>
          </Col>
        </Row>
      </Col>
      <Col className="collection-container" s={12} m={6} l={3}>
        <Row className="competences-collection">
          <Col>
            <Collection header="Back-end">
              <CollectionItem>
                Node JS
                <a
                  className="secondary-content"
                  href="https://nodejs.org/en/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
              <CollectionItem>
                Express
                <a
                  className="secondary-content"
                  href="https://expressjs.com/fr/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
              <CollectionItem>
                MongoDB
                <a
                  className="secondary-content"
                  href="https://www.mongodb.com/fr"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
            </Collection>
          </Col>
        </Row>
      </Col>
      <Col className="collection-container" s={12} m={6} l={3}>
        <Row className="competences-collection">
          <Col>
            <Collection header="Outils">
              <CollectionItem>
                Git / Gitlab
                <a
                  className="secondary-content"
                  href="https://github.com/manon2sf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
              <CollectionItem>
                Trello
                <a
                  className="secondary-content"
                  href="https://trello.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
              <CollectionItem>
                SCRUM
                <a
                  className="secondary-content"
                  href="https://www.scrum.org/resources/what-is-scrum"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
              <CollectionItem>
                Figma
                <a
                  className="secondary-content"
                  href="figma.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
            </Collection>
          </Col>
        </Row>
      </Col>
      <Col className="collection-container" s={12} m={6} l={3}>
        <Row className="competences-collection">
          <Col>
            <Collection header="En cours">
              <CollectionItem>
                PHP / mySQL
                <a
                  className="secondary-content"
                  href="https://www.php.net/manual/fr/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
              <CollectionItem>
                GraphQL
                <a
                  className="secondary-content"
                  href="https://graphql.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon>keyboard_arrow_right</Icon>
                </a>
              </CollectionItem>
            </Collection>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Competences;
