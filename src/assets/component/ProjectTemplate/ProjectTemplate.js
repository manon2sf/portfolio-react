/**
 * ProjectTemplate.js - Template for project component
 */

/* Modules and components imports */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Row from "react-materialize/lib/Row";
import Col from "react-materialize/lib/Col";
import Icon from "react-materialize/lib/Icon";
import Table from "react-materialize/lib/Table";

/* Styles imports */
import "./style.scss";

/* Footer component */
function Project(props) {
  /**
   * Methods
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  /**
   * Render
   */

  return (
    <div className="secondary-bg project-container center">
      <div className="flex title-project ">
        <div className="flex nav-project">
          <Link to={process.env.PUBLIC_URL + props.prevLink}>
            <Icon>navigate_before</Icon>
            <p>{props.prevTitle}</p>
          </Link>
        </div>
        <h1 className="accent-txt">{props.title}</h1>
        <div className="flex nav-project">
          <Link to={process.env.PUBLIC_URL + props.nextLink}>
            <p>{props.nextTitle}</p>
            <Icon>navigate_next</Icon>
          </Link>
        </div>
      </div>

      <Row>
        <Col l={4} s={12}>
          <Row>
            <Col l={12} s={4}>
              <div className="picture-container">
                <img className="img100 " src={props.imageA} alt="" />
              </div>
            </Col>
            <Col l={12} s={4}>
              <div className="picture-container">
                <img className="img100 " src={props.imageB} alt="" />
              </div>
            </Col>
            <Col l={12} s={4}>
              <div className="picture-container">
                <img className="img100 " src={props.imageC} alt="" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col l={8} s={12}>
          <Table>
            <tr>
              <th>Date</th>
              <td>{props.date}</td>
            </tr>
            {props.lien ? (
              <tr>
                <th>Lien</th>
                <td>
                  <a
                    href={props.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.lien}
                  </a>
                </td>
              </tr>
            ) : (
              ""
            )}
            <tr>
              <th>Contexte</th>
              <td>{props.context}</td>
            </tr>
            <tr>
              <th>Objectifs</th>
              <td>{props.objective}</td>
            </tr>
            <tr>
              <th>Stack</th>
              <td>{props.stack}</td>
            </tr>
            <tr>
              <th>Choix technologiques</th>
              <td>{props.techno}</td>
            </tr>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Project;
