/**
 * Bocalgram.js - Bocalgram project component
 */

/* Modules and components imports */
import React, { useEffect } from "react";

/* Styles imports */
import "./style.scss";

/* Footer component */
function Bocalgram(props) {
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
    <div id="" className="secondary-bg project-container">
      <p className="accent-txt">[en cours de construction]</p>
    </div>
  );
}

export default Bocalgram;
