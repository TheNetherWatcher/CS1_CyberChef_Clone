import React from 'react';
import ButtonSection from './ButtonSection';
import SearchBar from './SearchBar';
const LeftSection = () => {
  return  <div className="left-section">
  <SearchBar />
  <ButtonSection />
</div>;
};

const RightSection = () => {
  return <div className="right-section">70% Width</div>;
};

const VerticalLine = () => {
  return <div className="vertical-line"></div>;
};

export { LeftSection, RightSection, VerticalLine };

