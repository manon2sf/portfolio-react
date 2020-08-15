/**
 * Parcours.js - Parcours tab component
 */

/* Modules and components imports */
import React from "react";
import Tabs from "react-materialize/lib/Tabs";
import Tab from "react-materialize/lib/Tab";

/* Styles imports */
import "./style.scss";

function Parcours(props) {
  return (
    <Tabs
      className="tab-demo z-depth-1"
      options={{
        swipeable: true,
      }}
    >
      <Tab
        className=""
        options={{
          duration: 300,
          onShow: null,
          responsiveThreshold: Infinity,
          swipeable: false,
        }}
        title="Depuis Juin 2020"
      >
        Freelance blablabla
      </Tab>
      <Tab
        active
        className="secondary-bg"
        options={{
          duration: 300,
          onShow: null,
          responsiveThreshold: Infinity,
          swipeable: false,
        }}
        title="Mars - Mai 2020"
      >
        Formation Le Bocal academy
      </Tab>
      <Tab
        className=""
        options={{
          duration: 300,
          onShow: null,
          responsiveThreshold: Infinity,
          swipeable: false,
        }}
        title="2012 - 2020"
      >
        Ingénieur agro responsable de production responsable R&D
      </Tab>
    </Tabs>
  );
}

export default Parcours;
