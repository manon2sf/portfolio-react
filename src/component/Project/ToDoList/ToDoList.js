/**
 * ToDoList.js - To do list project component
 */

/* Modules and components imports */
import React from "react";
import Project from "../../../assets/component/ProjectTemplate/ProjectTemplate";

/* ToDoList component */
function ToDoList() {
  /**
   * Methods
   */
  const objective = () => {
    return (
      <ul>
        <li>
          To-Do list fonctionnelle avec modification / suppression de taches
        </li>
        <li>Affichage des tâches à réaliser et des tâches accomplies</li>
      </ul>
    );
  };

  /**
   * Render
   */

  return (
    <Project
      date="Mars 2020"
      title="To Do List"
      imageA="/img/toDo.jpg"
      imageB=""
      imageC=""
      context="Mini-projet réalisé lors de ma formation pour pratiquer la manipulation du DOM et Javascript."
      objective={objective()}
      stack={
        <p>
          <span class="primary-txt lighten bold">Javascript Vanilla</span> /{" "}
          <span class="primary-txt lighten bold">HTML</span> /
          <span class="primary-txt lighten bold">CSS</span> /{" "}
        </p>
      }
      techno=""
      lien="https://github.com/manon2sf/to-do-list"
      nextLink="/community"
      nextTitle="Community"
      prevLink="/bocalgram"
      prevTitle="Bocalgram"
    />
  );
}

export default ToDoList;
