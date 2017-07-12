import React from "react";

const Sidebar = ({ isActive, children }) => {
  return (
    <div className={`sidebar ${isActive && "sidebar--opened"}`}>
      {children}
    </div>
  );
};

export default Sidebar;
