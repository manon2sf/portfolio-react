/**
 * Bocalgram.js - Bocalgram project component
 */

/* Modules and components imports */
import React from "react";
import Project from "../../../assets/component/ProjectTemplate/ProjectTemplate";

/* bocalgram component */
function Bocalgram() {
  /**
   * Methods
   */
  const objective = () => {
    return (
      <ul>
        <li>Mise en place d'une création de compte avec authentification</li>
        <li>Publication de postes et de photos</li>
        <li>Affichage de l'historique des postes</li>
      </ul>
    );
  };

  const techno = () => {
    return (
      <ul>
        <li>
          <span class="accent-txt bold">JWT (JSON Web Token):</span>{" "}
          authentification par token
        </li>
        <li>
          <span class="accent-txt bold">Multer :</span> import et stockage de
          fichiers
        </li>
        <li>
          <span class="accent-txt bold">Bcrypt :</span> hachage de mot de passe
        </li>
        <li>
          <span class="accent-txt bold">Bootstrap :</span> framework pour le
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
      date="Avril 2020"
      title="Bocalgram"
      imageA="/img/LeBocalGram-couv.png"
      imageB=""
      imageC=""
      context="Application Web clone d'Instagram. Première application full-stack réalisée lors de ma formation"
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
      lien="https://github.com/manon2sf/instagram-clone-lebocalgram"
      nextLink="/todolist"
      nextTitle="To Do List"
      prevLink="/cinema"
      prevTitle="Ciné App"
    />
  );
}

export default Bocalgram;
