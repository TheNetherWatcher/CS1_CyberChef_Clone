import React from 'react';//Importing React.
import ButtonSection from './ButtonSection';
import SearchBar from './SearchBar';
import './horizontalline.css'
import SectionContent from './sectioncontent';

const LeftSection = () => {
  return  <div className="left-section">
  <SearchBar />
  <ButtonSection />
</div>;
};

const RightSection = () => {
  return (
    <div className="right-section">
      <SectionContent />
      <hr className="horizontal-line" />
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

export { LeftSection, RightSection, VerticalLine,LastSection };

