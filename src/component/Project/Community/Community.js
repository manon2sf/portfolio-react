/**
 * ProjectCommunity.js - Community project component
 */

/* Modules and components imports */
import React from "react";
import Project from "../../../assets/component/ProjectTemplate/ProjectTemplate";

/* Footer component */
function Community(props) {
  /**
   * Methods
   */

  const objective = () => {
    return (
      <ul>
        <li>
          Développer un système d'import de questionnaires, de réponse à ceux-ci
          et de consultation des résultats
        </li>
        <li>
          Permettre à l'administrateur de gérer la visibité des modules en
          fonction de l'avancement de l'apprenant
        </li>
      </ul>
    );
  };

  const techno = () => {
    return (
      <ul>
        <li>
          <span class="accent-txt bold">XLSX:</span> import de questionnaires
          depuis un tableur (Excel, LibreOffice)
        </li>
        <li>
          <span class="accent-txt bold">Passeport.js:</span>gestion de
          l'authentification par cookies
        </li>
        <li>
          <span class="accent-txt bold">API Contexte:</span> passage des données
          entre les différents composants
        </li>
        <li>
          <span class="accent-txt bold">Materialize : </span> framework pour le
          rendu visuel
        </li>
      </ul>
    );
  };

  /**
   * Render
   */
  return (
    <Project
      date="Juillet 2020"
      title="Community"
      imageA="/img/cannes_module.png"
      imageB="/img/mockuper-display-quiz.png"
      imageC="/img/mockuper-bocal-login3.png"
      context={
        <div>
          <p>
            Community est la plateforme pédagogique du Bocal Academy. Elle a
            pour but de mettre à disposition des apprenants différents types de
            ressources (cours, ateliers, questionnaires, webinars...) afin de
            progresser dans leur formation de développeur.
          </p>
          <p>Ce projet a été réalisé en tant que freelance</p>
        </div>
      }
      objective={objective()}
      stack={
        <p>
          MERN - <span class="primary-txt lighten bold">MongoDB</span> /{" "}
          <span class="primary-txt lighten bold">Express</span> /
          <span class="primary-txt lighten bold">React</span> /{" "}
          <span class="primary-txt lighten bold">Node JS</span>
        </p>
      }
      techno={techno()}
      nextLink="/cannesisup"
      nextTitle="Cannes is Up"
      prevLink="/bocalgram"
      prevTitle="Bocalgram"
    />
  );
}

export default Community;
