/**
 * App.js - App root file
 * Handles routes
 */

/* Modules and components imports */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min";

/* Components imports */
import Navbar from "./Navbar/Navbar";
import Home from "../component/Home/Home";
import Community from "../component/Project/ProjectCommunity";
import Footer from "../component/Footer/Footer";

/* Styles imports */
import "materialize-css/dist/css/materialize.min.css";
import "../assets/styles/main.scss";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="appContainer">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <Switch>
          <Route path="/community" component={Community} />
          <Route path="/" component={Home} />
        </Switch>

        {/* Footer  */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
