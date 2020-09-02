/**
 * ProjectCommunity.js - Community project component
 */

/* Modules and components imports */
import React, { useEffect } from "react";

/* Styles imports */
import "./style.scss";

/* Footer component */
function Community(props) {
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
      <h1 className="accent-txt">Community</h1>
    </div>
  );
}

export default Community;
