import React from 'react';//Importing React.
import './horizontalline.css'
import SectionContent from './sectioncontent';

const RightSection = () => {
  return (
    <div className="right-section">
      <SectionContent />
    </div>
  );
};

const VerticalLine = () => {
  return <div className="vertical-line"></div>;
};

const LastSection = () => {
  return  <div className="last-section">
</div>;
};

export { RightSection, VerticalLine,LastSection };
