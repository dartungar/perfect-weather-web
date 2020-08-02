import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Header from "../layout/Header";
import FilterColumn from "./filter/FilterColumn";
import SidebarControls from "./SidebarControls";

const Sidebar = (props) => {
  const [isSidebarShown, setIsSidebarShown] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarShown(!isSidebarShown);
  };

  return (
    <div className="sidebar">
      <SidebarControls
        toggleSidebar={toggleSidebar}
        isSidebarShown={isSidebarShown}
      />
      <div className={`sidebar-main ${!isSidebarShown && "hidden"}`}>
        {isSidebarShown && (
          <Fragment>
            <Header /> <FilterColumn />
          </Fragment>
        )}
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
