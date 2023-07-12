import React, {useState} from 'react';              //Importing React 
import Navbar from './MyComponents/Navbar';           //Importing Navbar
import './App.css';           //Importing css file
import { VerticalLine} from './MyComponents/splitscreen';     //Importing various sections
import Footer from './MyComponents/footer';
import './App.css'
import './MyComponents/buttonsection.css'
import './MyComponents/sectioncontent.css'
import './MyComponents/sectioncontent2.css'
import CryptoJS from 'crypto-js';
import SectionContent from './MyComponents/sectioncontent';

function App() {  
  const [instring, setInstring] = useState("");
  const [outstring, setOutstring] = useState("");    
  const [algo, setAlgo] = useState(0);
  const [rotnum, setRotnum] = useState(13);
  const [action, setAction] = useState(1);
  const handleOnChange = (event) => {
    setInstring(event.target.value)
    // setOutstring(event.target.value)
  }
  const handleMD5 = () => {
    setAlgo(1)
    if(action === 0){
      setOutstring(CryptoJS.MD5(instring))
    }
    else{
      setOutstring(instring)
    }
  }
  const handleSHA1 = () => {
    setAlgo(2)
    if(action === 0){
      setOutstring(CryptoJS.SHA1(instring))
    }
    else{
      setOutstring(instring)
    }
  }
  const handleSHA224 = () => {
    setAlgo(3)
    if(action === 0){
      setOutstring(CryptoJS.SHA224(instring))
    }
    else{
      setOutstring(instring)
    }
  }
  const handleSHA256 = () => {
    setAlgo(4)
    if(action === 0){
      setOutstring(CryptoJS.SHA256(instring))
    }
    else{
      setOutstring(instring)
    }
  }
  const handleBase64 = () => {
    setAlgo(5)
    if(action === 0){
      setOutstring(btoa(instring))
    }
    else{
      setOutstring(atob(instring))
    }
  }
  const handleBinary = () => {
    setAlgo(6)
    let res = '';
    res = instring.split('').map(char => {
      return char.charCodeAt(0).toString(2);
    }).join(' ');
    if(action === 0){
      setOutstring(res)
    }
    else{
      setOutstring(instring)
    }
  }
  const handleURL = () => {
    setAlgo(7)
    if(action === 0){
      setOutstring(encodeURI(instring))
    }
    else{
      setOutstring(decodeURI(instring))
    }
  }
  const handleHex = () => {
    setAlgo(8)
    let hex = '';
    for (let i = 0; i < instring.length; i++) {
      const charCode = instring.charCodeAt(i);
      const hexValue = charCode.toString(16);
      hex += hexValue.padStart(2, '0');
    }
    let ascii=""
    for (let i = 0; i < instring.length; i+=2) {
      let part = instring.substring(i,i+2);
      let ch=String.fromCharCode(parseInt(part,16));
      ascii=ascii+ch;
    }
    if(action===0){
      setOutstring(hex)
    }
    else{
      setOutstring(ascii)
    }
  }
  const handleROT = () => {
    setAlgo(9)
    let result = ""
    for (let i = 0; i < instring.length; i++) {
      let char=instring[i];
      if (char.toUpperCase(instring[i])) {
        let ch = String.fromCharCode((char.charCodeAt(0) + rotnum - 65)%26 + 65);
        result+=ch;
      }      
      else{
        let ch = String.fromCharCode((char.charCodeAt(0) + rotnum - 97)%26 + 97);
        result+=ch;
      }
    }
    setOutstring(result)
  }
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="app">
      <div className='left-section' >
      <div className="section-content-2">
    <span className="span-area my-2">OPERATIONS</span>
      
    </div>
      <div className="button-group">
     
        <button className="custom-button" onClick={handleMD5}>MD5</button>
        <button className="custom-button" onClick={handleSHA1}>SHA-1</button>
        <button className="custom-button" onClick={handleSHA224}>SHA-224</button>
        <button className="custom-button" onClick={handleSHA256}>SHA-256</button>
        <button className="custom-button" onClick={handleBase64}>Base64</button>
        <button className="custom-button" onClick={handleURL}>URL encoding</button>
        <button className="custom-button" onClick={handleHex}>Hexadecimal</button>
        <button className="custom-button" onClick={handleBinary}>Binary</button>
        <button className="custom-button" onClick={handleROT}>ROT13</button>
        <button className="custom-button">Ipsum</button>
        <button className="custom-button">Lorem</button>
        <button className="custom-button">Ipsum</button>
        <button className="custom-button">Lorem</button>
      </div>
      <button onClick={() => setAction(0)}>Encrypt</button>
      <button onClick={() => setAction(1)}>Decrypt</button>
      </div>
      <VerticalLine />
      <div className='last-section'>
      <div className="section-content-2">
      <span className="span-area my-2">More About It</span>
      <SectionContent value={algo}/>
      </div>
      </div>
      <VerticalLine />
      <div className='right-section'>
      <div className="section-content">
        <span className="span-area my-2">Input String</span>
        <textarea className="text-area" value={instring} onChange={handleOnChange}></textarea>
        </div>
        <div className="section-content">
        <span className="span-area my-2">Output String</span>
        <textarea className="text-area" value={outstring} onChange={handleOnChange}></textarea>
      </div>  
      </div> 
    </div>
    <div>
    <Footer/>
    </div>
    </>
  );
}

export default App;