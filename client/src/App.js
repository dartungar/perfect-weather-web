import React, { Fragment, useEffect } from "react";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import PlacesState from "./context/places/PlacesState";
import "materialize-css/dist/css/materialize.min.css";
// JS для всяких модалов и других компонентов использующих скрипты
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

function App() {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <PlacesState>
      <Fragment>
        <Home />
        <Footer />
      </Fragment>
    </PlacesState>
  );
}

export default App;
