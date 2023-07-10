import React,{useState} from 'react'; 
import { useDencrypt } from 'use-dencrypt-effect';
import CryptoJS from 'crypto-js';
import './App.css'

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
    let x=<div><p className='heading'>Hexadecimal Conversion conversion algorithm</p>
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
          <button className="custom-button" onClick={handleROT}>ROT-{rotnum}</button>
          <button className="custom-button">Ipsum</button>
          <button className="custom-button">Lorem</button>
          <button className="custom-button">Ipsum</button>
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