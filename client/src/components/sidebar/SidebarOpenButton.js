import React from "react";

const SidebarOpenButton = ({ onClick }) => {
  return (
    <a href="#" className="sidebar-open-button" onClick={() => onClick()}>
      <i className="material-icons">menu</i>
    </a>
  );
};

export default SidebarOpenButton;
