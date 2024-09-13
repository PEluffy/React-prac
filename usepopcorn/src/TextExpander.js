import React, { useState } from "react";

export default function TextExpander({
  children,
  maxLength = 80,
  expandButtonText = "show",
  collapseButtonText = "hide",
}) {
  const [isExpanded, setExpanded] = useState(false);
  const TextExpanderStyle = {
    backgroundColor: "grey",
    marginBottom: "5px",
  };
  const showLessMoreStyle = {
    marginLeft: "40px",
    color: "blue",
    fontSize: "8px",
    cursor: "pointer",
  };
  return (
    <div>
      <div className="textExpanderContainer" style={TextExpanderStyle}>
        {isExpanded ? children : children.slice(0, maxLength) + "..."}
        <span
          style={showLessMoreStyle}
          onClick={() => setExpanded((curr) => !curr)}
          className="showLessMore"
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </span>
      </div>
    </div>
  );
}
