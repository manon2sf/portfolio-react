/**
 * CannesIsUp.js - Cannes Is Up project component
 */

/* Modules and components imports */
import React from "react";
import Project from "../../../assets/component/ProjectTemplate/ProjectTemplate";

/* Footer component */
function CannesIsUp() {
  /**
   * Methods
   */
  const objective = () => {
    return (
      <ul>
        <li>
          Création d'un espace back-office pour les adhérents et les
          administrateurs (gestion des adhérents)
        </li>
        <li>Inscription des futurs membres en ligne via un formulaire</li>
        <li>
          Création d'un annuaire des adhérents avec fiches détaillées visible
          sur le site
        </li>
      </ul>
    );
  };

  const techno = () => {
    return (
      <ul>
        <li>
          <span class="accent-txt bold">Nodemailer:</span> envoi automatique de
          mails
        </li>
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
      date="Mai 2020"
      title="Cannes Is Up"
      imageA="/img/mockuper-cannesisup.png"
      imageB=""
      imageC=""
      context={
        <p>
          <a
            href="https://cannesisup.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cannes is Up
          </a>{" "}
          est l'association French Tech Côte d'Azur du bassin Cannois. Ce projet
          à été réalisé en équipe de 3 personnes dans le cadre de ma formation
          de développeuse.
        </p>
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
      lien="https://github.com/manon2sf/Cannes-is-up"
      nextLink="/cinema"
      nextTitle="Ciné App"
      prevLink="/community"
      prevTitle="Community"
    />
  );
}

export default CannesIsUp;
