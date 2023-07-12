import React, {useState} from 'react';
import './sectioncontent.css'
import CryptoJS from 'crypto-js';

const SectionContent = (props) => {
  const [text, setText] = useState(""); 
    const handleOnChange = (event) => {
      setText(event.target.value)
    }

  return (
    <>
    <div className="section-content">
    <span className="span-area my-2">INPUT</span>
    <textarea className="text-area" value={text} onChange={handleOnChange}></textarea>
    </div>
    <div className="section-content">
    <span className="span-area my-2">OUTPUT</span>
    <textarea className="text-area" value={CryptoJS.MD5(text)}></textarea>
    </div>
    </>
  );
};

export default SectionContent;
