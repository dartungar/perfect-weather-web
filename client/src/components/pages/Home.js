import React from "react";
import Worldmap from "../worldmap/Worldmap";
import FilterColumn from "../filters/FilterColumn";
import Header from "../layout/Header";

const Home = () => {
  return (
    <div className="main-container">
      <div className="left-column">
        <Header /> <FilterColumn />
      </div>
      <Worldmap />
    </div>
  );
};

export default Home;
