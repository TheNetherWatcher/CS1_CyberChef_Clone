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


function App() {  
  const [instring, setInstring] = useState("");
  const [outstring, setOutstring] = useState("");    
  const [algo, setAlgo] = useState("This is where you will see the algorithm information");
  const [rotnum, setRotnum] = useState(13);
  const handleOnChange = (event) => {
    setInstring(event.target.value)
    setOutstring(event.target.value)
  }
  const handleMD5 = () => {
    let x=<div><p className='heading'>MD5 algorithm</p>
            <p className='description'>MD5(Message Digest Method 5) is a cryptographic hashing algorithm used to generate a 128-bit digest from a string of any length. It represents the digest as 32 digit hexadecimal numbers.</p>
            
          </div>
    setOutstring(CryptoJS.MD5(instring))
    setAlgo(x)
  }
  const handleSHA1 = () => {
    let x=<div><p className='heading'>SHA-1 conversion algorithm</p>
            <div className='description'>
              <p>This is the description of the SHA-1 conversion algorithm</p>
            </div>
          </div>
    setOutstring(CryptoJS.SHA1(instring))
    setAlgo(x)
  }
  const handleSHA224 = () => {
    let x=<div><p className='heading'>SHA-224 conversion algorithm</p>
            <div className='description'>
              <p>This is the description of the SHA-224 conversion algorithm</p>
            </div>
          </div>
    setAlgo(x)
    setOutstring(CryptoJS.SHA224(instring))
  }
  const handleSHA256 = () => {
    let x=<div><p className='heading'>SHA-256 conversion algorithm</p>
            <div className='description'>
              <p>This is the description of the SHA-256 conversion algorithm</p>
            </div>
          </div>
    setAlgo(x)
    setOutstring(CryptoJS.SHA256(instring))
  }
  const handleBase64 = () => {
    let x=<div><p className='heading'>Base64 conversion algorithm</p>
            <div className='description'>
              <p>This is the description of the Base64 conversion algorithm</p>
            </div>
          </div>
    setAlgo(x)
    setOutstring(btoa(instring))
  }
  const handleBinary = () => {
    let x=<div><p className='heading'>Binary Conversion</p>
            <div className='description'>
              <p>This is the description of the Binary conversion algorithm</p>
            </div>
          </div>
    setAlgo(x)
    let res = '';
    res = instring.split('').map(char => {
      return char.charCodeAt(0).toString(2);
    }).join(' ');
    setOutstring(res)
  }
  const handleURL = () => {
    let x=<div><p className='heading'>URL conversion algorithm</p>
            <div className='description'>
              <p>This is the description of the URL conversion algorithm</p>
            </div>
          </div>
    setAlgo(x)
    setOutstring(encodeURI(instring))
  }
  const handleHex = () => {
    let hex = '';
    for (let i = 0; i < instring.length; i++) {
      const charCode = instring.charCodeAt(i);
      const hexValue = charCode.toString(16);
      hex += hexValue.padStart(2, '0');
    }
    setOutstring(hex)
    let x=<div><p className='heading'>Hexadecimal Conversion algorithm</p>
            <div className='description'>
              <p>This is the description of the Hexadecimal Conversion conversion algorithm</p>
            </div>
          </div>
    setAlgo(x)
  }
  const handleROT = () => {
    let x=<div><p className='heading'>ROT-{rotnum} conversion algorithm</p>
            <div className='description'>
              <p>This is the description of the ROT-{rotnum} conversion algorithm</p>
            </div>
          </div>
    setAlgo(x)
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
      </div>
      <VerticalLine />
      <div className='last-section'>
      <div className="section-content-2">
    <span className="span-area my-2">More About It</span>
    {/* <textarea className="text-area-2" >{algo}</textarea> */}
    {algo}
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