/**
 * CannesIsUp.js - Cannes Is Up project component
 */

/* Modules and components imports */
import React, { useEffect } from "react";

/* Styles imports */
import "./style.scss";

/* Footer component */
function CannesIsUp(props) {
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

export default CannesIsUp;
