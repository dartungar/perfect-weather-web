import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Header from "../layout/Header";
import FilterColumn from "../filters/FilterColumn";
import SidebarOpenButton from "./SidebarOpenButton";

const Sidebar = (props) => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleClick = () => {
    console.log("changing sidebar visibility");
    setShowSidebar(!showSidebar);
  };

  return (
    <Fragment>
      <SidebarOpenButton onClick={handleClick} />
      <div className={`sidebar ${!showSidebar && "hidden"}`}>
        <Header /> <FilterColumn />
      </div>
    </Fragment>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
