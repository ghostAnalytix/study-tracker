import React, { useState } from "react";
import { Circle, CheckCircle } from "lucide-react";

/**
 * TopicItem
 *  - title: main topic name
 *  - subtopics: array of subtopic strings
 *  - onComplete: callback to track completion
 */
const TopicItem = ({ title, subtopics = [], onComplete }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newVal = !isChecked;
    setIsChecked(newVal);
    if (onComplete) {
      onComplete(newVal);
    }
  };

  return (
    <div className="topic-item">
      <div className="topic-main">
        <button className="topic-checkbox" onClick={handleToggle}>
          {isChecked ? (
            <CheckCircle className="topic-checkbox-icon checked" />
          ) : (
            <Circle className="topic-checkbox-icon" />
          )}
        </button>
        <span className={`topic-title ${isChecked ? "completed" : ""}`}>
          {title}
        </span>
      </div>

      {subtopics.length > 0 && (
        <ul className="topic-sublist">
          {subtopics.map((sub, idx) => (
            <li key={idx} className="topic-sublist-item">
              {sub}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopicItem;
