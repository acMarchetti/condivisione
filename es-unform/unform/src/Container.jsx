import React, { useState } from "react";

// Container Component
export function Container({ title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggle collapsible state
  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  // Styles for the container
  const containerStyle = {
    backgroundColor: "white",
    border: "2px solid red",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
  };

  const titleStyle = {
    cursor: "pointer",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      {/* Title section */}
      <div style={titleStyle} onClick={toggleCollapse}>
        {title}
      </div>
      {/* Children content */}
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
}
