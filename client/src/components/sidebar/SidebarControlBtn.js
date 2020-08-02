import React from "react";
import PropTypes from "prop-types";

const SidebarControlBtn = ({ btnIcon, onClick }) => {
  return (
    <div className="sidebar-control-btn" onClick={() => onClick()}>
      <i className="material-icons">{btnIcon}</i>
    </div>
  );
};

SidebarControlBtn.propTypes = {};

export default SidebarControlBtn;
