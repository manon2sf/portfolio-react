/**
 * Cine.js - Cine project component
 */

/* Modules and components imports */
import React from "react";
import Project from "../../../assets/component/ProjectTemplate/ProjectTemplate";

/* cine component */
function Cine() {
  /**
   * Methods
   */
  const objective = () => {
    return (
      <ul>
        <li>Navigation à 3 niveaux</li>
        <li>Page d’accueil avec les dernières sorties vidéo</li>
        <li>Faire une recherche par titre de film</li>
        <li>
          Consulter des vidéos issues d’une chaine Youtube de critique de films
        </li>
        <li>Création d’un compte utilisateur (login / logout )</li>
      </ul>
    );
  };

  const techno = () => {
    return (
      <ul>
        <li>
          <span class="accent-txt bold">(TMDb) API The Movie Database:</span>{" "}
          API open source pour la base de données de films
        </li>
        <li>
          <span class="accent-txt bold"> React Navigation 4 :</span> gestion de
          la navigation ( switch et tabs)
        </li>
      </ul>
    );
  };

  /**
   * Render
   */

  return (
    <Project
      date="Mai 2020"
      title="Application mobile Cinéma"
      imageA="/img/cine1.png"
      imageB="/img/cine2.png"
      imageC="/img/cine3.jpg"
      context="Application mobile pour les cinéphiles. Recherche de films avec leur résumé, dernières sorties et vidéos de critiques de films."
      objective={objective()}
      stack={
        <p>
          <span class="primary-txt lighten bold">React Native </span>
        </p>
      }
      techno={techno()}
      lien="https://github.com/manon2sf/cinema-mobile-app"
      nextLink="/bocalgram"
      nextTitle="Bocalgram"
      prevLink="/cannesisup"
      prevTitle="Cannes Is Up"
    />
  );
}

export default Cine;
