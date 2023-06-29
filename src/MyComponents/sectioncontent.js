<<<<<<< Updated upstream
import React, {useState} from 'react';
import './sectioncontent.css'


const SectionContent = () => {
  const [text, setText] = useState("Enter here"); 
  
  const handleOnChange = (event) => {
    console.log("On change")
    setText(event.target.value)
  }
  let x = text
  
  return (
    <>
    <div className="section-content">
    <span className="span-area my-2">INPUT</span>
    <textarea className="text-area" value={text} onChange={handleOnChange}></textarea>
    </div>
    <div className="section-content">
    <span className="span-area my-2">OUTPUT</span>
    <textarea className="text-area" value={x}></textarea>
    </div>
    </>
  );
};

export default SectionContent;
=======
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
>>>>>>> Stashed changes
