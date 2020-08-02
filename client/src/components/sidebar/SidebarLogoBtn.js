import React from "react";

const SidebarLogoBtn = ({ onClick }) => {
  return (
    <div className="sidebar-control-btn" onClick={onClick}>
      <img
        src="./customIcon.svg"
        alt="Perfect Climate logo"
        width="30px"
        style={{ display: "inline-block" }}
      />
    </div>
  );
};

export default SidebarLogoBtn;
