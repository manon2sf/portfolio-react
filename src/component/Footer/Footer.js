/**
 * Footer.js - Footer component
 */

/* Modules and components imports */
import React from "react";

/* Styles imports */
import "./style.scss";

/* Footer component */
function Footer(props) {
  /**
   * Methods
   */

  const today = new Date();
  const year = today.getFullYear();

  /**
   * Render
   */

  return (
    <div id="footerContainer" className="primary-bg darken">
      <div id="copyrightContainer">
        <p className="copyright-txt">© Manon de Saint-Ferréol {year}</p>
      </div>
    </div>
  );
}

export default Footer;
