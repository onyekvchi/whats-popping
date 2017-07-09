import React from "react";

const Sidebar = ({ location, children }) => {
  const isActive = location.pathname.split("/")[1] === "event";
  return (
    <div className={`sidebar ${isActive && "sidebar--opened"}`}>
      {children}
    </div>
  );
};

export default Sidebar;
