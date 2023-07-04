import React, {useState} from 'react';              
import './App.css'
import './MyComponents/buttonsection.css'
import './MyComponents/sectioncontent.css'
import Navbar from './MyComponents/Navbar';           //Importing Navbar
import CryptoJS from 'crypto-js';

function App() {  
  const [instring, setInstring] = useState("");
  const [outstring, setOutstring] = useState("");
  const handleOnChange = (event) => {
    setInstring(event.target.value)
    setOutstring(event.target.value)
  }
  const handleMD5 = () => {
    setOutstring(CryptoJS.MD5(instring))
  }
  const handleSHA1 = () => {
    setOutstring(CryptoJS.SHA1(instring))
  }
  const handleSHA224 = () => {
    setOutstring(CryptoJS.SHA224(instring))
  }
  const handleSHA256 = () => {
    setOutstring(CryptoJS.SHA256(instring))
  }
  const handleBase64 = () => {
    setOutstring(btoa(instring))
  }
  const handleBinary = () => {
    let res = '';
    res = instring.split('').map(char => {
       return char.charCodeAt(0).toString(2);
    }).join(' ');
    setOutstring(res)
  }
  const handleURL = () => {
    setOutstring(encodeURI(instring))
  }
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="app">
      <div className='left-section'>
        <div className="button-group">
          <button className="custom-button" onClick={handleMD5}>MD5</button>
          <button className="custom-button" onClick={handleSHA1}>SHA-1</button>
          <button className="custom-button" onClick={handleSHA224}>SHA-224</button>
          <button className="custom-button" onClick={handleSHA256}>SHA-256</button>
          <button className="custom-button">RSA</button>
          <button className="custom-button" onClick={handleBase64}>Base64</button>
          <button className="custom-button" onClick={handleURL}>URL encoding</button>
          <button className="custom-button">HTML encoding</button>
          <button className="custom-button">Hexadecimal</button>
          <button className="custom-button" onClick={handleBinary}>Binary</button>
          <button className="custom-button">Lorem</button>
          <button className="custom-button">Ipsum</button>
          <button className="custom-button">Lorem</button>
          <button className="custom-button">Ipsum</button>
          <button className="custom-button">Lorem</button>
        </div>
      </div>
      <div className='middle-section'>

      </div>
      <div className='right-section'>
      <div className="section-content">
        <span className="span-area my-2">Decrypted Message</span>
        <textarea className="text-area" value={instring} onChange={handleOnChange}></textarea>
        </div>
        <div className="section-content">
        <span className="span-area my-2">Encrypted Message</span>
        <textarea className="text-area" value={outstring} onChange={handleOnChange}></textarea>
      </div>  
      </div> 
    </div>
    </>
  );
}

export default App;