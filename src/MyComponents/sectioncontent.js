import React from 'react';
import './sectioncontent.css'
const SectionContent = () => {
  return (
    <div className="section-content">
      <nav className="navbar">
      <span className="navbar-name">INPUT</span>
      </nav>
      <div className="text-area-container">
        <textarea
          className="text-area"
          placeholder="Enter your text here..."
        ></textarea>
      </div>
    </div>
  );
};

export default SectionContent;

