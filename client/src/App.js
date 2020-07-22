import React, { Fragment } from "react";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import PlacesState from "./context/places/PlacesState";
import "./App.css";

function App() {
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
