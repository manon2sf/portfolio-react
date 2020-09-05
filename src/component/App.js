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
import Community from "./Project/Community/Community";
import CannesIsUp from "./Project/CannesIsUp/CannesIsUp";
import Bocalgram from "./Project/Bocalgram/Bocalgram";
import ToDoList from "./Project/ToDoList/ToDoList";
import Cine from "./Project/Cine/Cine";
import Footer from "../component/Footer/Footer";

/* Styles imports */
import "materialize-css/dist/css/materialize.min.css";
import "../assets/styles/main.scss";

function App() {
  return (
    <Router>
      <div id="appContainer">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL}/community`}
            component={Community}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/cannesisup`}
            component={CannesIsUp}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/bocalgram`}
            component={Bocalgram}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/todolist`}
            component={ToDoList}
          />
          <Route path={`${process.env.PUBLIC_URL}/cinema`} component={Cine} />
          <Route path={process.env.PUBLIC_URL} component={Home} />
        </Switch>

        {/* Footer  */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
