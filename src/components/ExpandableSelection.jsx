import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

/**
 * ExpandableSelection
 *  - title: The text for the collapsible header
 *  - icon: optional string or component to show before the title
 *  - children: The nested content
 */
const ExpandableSelection = ({ title, icon, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div className="expandable-section">
      <div className="section-header" onClick={handleToggle}>
        {/* Icon or emoji */}
        {icon && <span className="section-icon">{icon}</span>}

        {/* Arrow */}
        {isExpanded ? (
          <ChevronDown className="section-chevron" />
        ) : (
          <ChevronRight className="section-chevron" />
        )}

        <span className="section-title">{title}</span>
      </div>

      {/* Collapsible content */}
      <div
        className={`section-content ${
          isExpanded ? "section-content-expanded" : "section-content-collapsed"
        }`}
      >
        {isExpanded && <div className="section-inner">{children}</div>}
      </div>
    </div>
  );
};

export default ExpandableSelection;
