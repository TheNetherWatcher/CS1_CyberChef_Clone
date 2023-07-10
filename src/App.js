import React,{useState} from 'react'; 
import { useDencrypt } from 'use-dencrypt-effect';
import CryptoJS from 'crypto-js';
import './App.css'
import './My Components/sectioncontent.css'
import Navbar from './My Components/Navbar';
import Button from './My Components/Button';

function App() {  
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const nums = "0123456789";
  const special = "~`!@#$%^&*()_-+=/*{}[];:'<>,."
  const alphabet =  latin + nums + special;
  const [instring, setInstring] = useState("");
  const [outstring, setOutstring] = useState("");    
  const [title1, setTitle1] = useDencrypt("Input String",{chars : alphabet});  
  const [title2, setTitle2] = useDencrypt("Output String",{chars : alphabet});
  const [algo, setAlgo] = useState("This is where you will see the algorithm information");
  const [rotnum, setRotnum] = useState(13);
  const handleOnChange = (event) => {
    setInstring(event.target.value)
    setOutstring(event.target.value)
  }
  const handleMD5 = () => {
    let x=<div><p className='heading'>MD5 conversion algorithm</p>
            <p className='description'>This is the description of the MD5 conversion algorithm</p>
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
    <Navbar />
    <div className="app">
      <div className="left-section">
        <div className="button-group">
          <Button algoname="MD5" func={handleMD5}/>
          <Button algoname="SHA-1" func={handleSHA1}/>
          <Button algoname="SHA-224" func={handleSHA224}/>
          <Button algoname="SHA-256" func={handleSHA256}/>
          <Button algoname="RSA"/>
          <Button algoname="Base64" func={handleBase64} />
          <Button algoname="URL conversion" func={handleURL} />
          <Button algoname="Hexadecimal Conversion" func={handleHex} />
          <Button algoname="Binary conversion" func={handleBinary} />
          <Button algoname={"ROT"} func={handleROT} />
        </div>
      </div>
      <div className="middle-section">
        <h1>{algo}</h1>
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