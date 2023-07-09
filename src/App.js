import React,{useState,useEffect} from 'react'; 
import { useDencrypt } from 'use-dencrypt-effect';
import CryptoJS from 'crypto-js';
import './App.css'
import './MyComponents/buttonsection.css'
import './MyComponents/sectioncontent.css'
import MiddleSection from './MyComponents/MiddleSection'
import './MyComponents/Navbar.css'

function App() {  
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nums = "0123456789";
  const special = "~`!@#$%^&*()_-+=/*{}[];:'<>,."
  const alphabet =  latin + nums +special;
  const [instring, setInstring] = useState("");
  const [outstring, setOutstring] = useState("");
  const [value, setValue] = useDencrypt("ByteBaker",{chars : alphabet});
  const [title1, setTitle1] = useDencrypt("Input String",{chars : alphabet});  
  const [title2, setTitle2] = useDencrypt("Output String",{chars : alphabet});
  const [title, setTitle]  = useDencrypt("",{chars : alphabet});

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
  const handleHex = () => {
    let hex = '';
    for (let i = 0; i < instring.length; i++) {
      const charCode = instring.charCodeAt(i);
      const hexValue = charCode.toString(16);
      hex += hexValue.padStart(2, '0');
    }
    setOutstring(hex)
  }
  return (
    <>
    <div>
    <nav className="navbar1">
      <div className="navbar-title">
        <span className="navbar-name" onClick={()=>setValue("ByteBaker")}>{value}</span>
      </div>
    </nav>
    </div>
    <div className="app">
      <div className="left-section">
        <div className="button-group">
          <button className="custom-button" onClick={handleMD5}>MD5</button>
          <button className="custom-button" onClick={handleSHA1}>SHA-1</button>
          <button className="custom-button" onClick={handleSHA224}>SHA-224</button>
          <button className="custom-button" onClick={handleSHA256}>SHA-256</button>
          <button className="custom-button">RSA</button>
          <button className="custom-button" onClick={handleBase64}>Base64</button>
          <button className="custom-button" onClick={handleURL}>URL encoding</button>
          <button className="custom-button">HTML encoding</button>
          <button className="custom-button" onClick={handleHex}>Hexadecimal</button>
          <button className="custom-button" onClick={handleBinary}>Binary</button>
          <button className="custom-button">Lorem</button>
          <button className="custom-button">Ipsum</button>
          <button className="custom-button">Lorem</button>
          <button className="custom-button">Ipsum</button>
        </div>
      </div>
      <div className="middle-section">
        <MiddleSection />
      </div>
      <div className="right-section">
        <div className="section-content">
          <span className="span-area my-2" onClick={() => setTitle1("Input String")}>{title1}</span>
          <textarea className="text-area" value={instring} onChange={handleOnChange}></textarea>
        </div>
          <div className="section-content">
          <span className="span-area my-2" onClick={() => setTitle2("Output String")}>{title2}</span>
          <textarea className="text-area" value= {outstring} onChange={handleOnChange}></textarea>
        </div>  
      </div> 
    </div>
    </>
  );
}

export default App;