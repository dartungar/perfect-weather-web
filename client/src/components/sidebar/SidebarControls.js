import React from "react";
import SidebarLogoBtn from "./SidebarLogoBtn";
import SidebarControlBtn from "./SidebarControlBtn";

const SidebarControls = ({ isSidebarShown, toggleSidebar }) => {
  return (
    <div className="sidebar-controls-col">
      {isSidebarShown ? (
        <SidebarControlBtn onClick={toggleSidebar} btnIcon="close" />
      ) : (
        <SidebarLogoBtn onClick={toggleSidebar} />
      )}

      <SidebarControlBtn onClick={toggleSidebar} btnIcon="filter_alt" />
      <SidebarControlBtn onClick={toggleSidebar} btnIcon="info" />
    </div>
  );
};

export default SidebarControls;
