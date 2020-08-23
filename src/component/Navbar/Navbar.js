/**
 * Navbar.js - Navbar component
 */

/* Modules and components imports */
import React, { useState } from "react";
import Navbar from "react-materialize/lib/Navbar";
import NavItem from "react-materialize/lib/NavItem";
import Icon from "react-materialize/lib/Icon";
import cv from "../../assets/pdf/CV_2020-08-19_Manon_de_Saint-Ferreol.pdf";
import linkedin from "../../assets/img/linkedin-brands.svg";
import github from "../../assets/img/github-square-brands.svg";

/* Styles imports */
import "./style.scss";

/* Navbar component */
function MainNav(props) {
  /**
   * State
   */

  /**
   * Methods
   */

  /**
   * Render
   */

  return (
    <div id="navbarContainer" className="primary-bg">
      <Navbar
        alignLinks="right"
        brand={
          <a className="brand-logo" href="#home">
            M2SF
          </a>
        }
        id="mobile-nav"
        className="primary-bg fixed zindex100"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true,
        }}
      >
        <NavItem href="#a-propos">A propos</NavItem>
        <NavItem href="#competences">Compétences</NavItem>
        <NavItem href="#projets" className="portfolio">
          Portfolio
        </NavItem>
        <NavItem target="_blank" href={cv}>
          CV
        </NavItem>
        <NavItem target="_blank" href="mailto:manon2sf@gmail.com">
          <Icon>email</Icon>
        </NavItem>
        <NavItem target="_blank" href="https://github.com/manon2sf">
          <div>
            <img className="logo-reseau" src={github} />
          </div>
        </NavItem>
        <NavItem
          target="_blank"
          href="https://www.linkedin.com/in/manon-de-saint-ferreol/"
        >
          <div>
            <img className="logo-reseau" src={linkedin} />
          </div>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default MainNav;
