import React from "react";
import Worldmap from "../worldmap/Worldmap";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Worldmap />
    </div>
  );
};

export default Home;
