/**
 * App.js - App root file
 * Handles routes
 */

/* Modules and components imports */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min";

/* Styles imports */
import "materialize-css/dist/css/materialize.min.css";
import "../assets/styles/main.scss";

/* Components imports */
import Navbar from "../component/Navbar/Navbar";
import Home from "../component/Home/Home";
import Footer from "../component/Footer/Footer";

function App() {
  return (
    <Router>
      <div id="#appContainer">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <Switch>
          <Route path="/" component={Home} />
        </Switch>

        {/* Footer  */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
