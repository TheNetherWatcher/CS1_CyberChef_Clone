import React from 'react';              //Importing React 
import Navbar from './MyComponents/Navbar';           //Importing Navbar
import './App.css';           //Importing css file
import { LeftSection, RightSection, VerticalLine,LastSection } from './MyComponents/splitscreen';     //Importing various sections
import Footer from './MyComponents/footer';
function App() {              //funtion named app
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="app">
      <LeftSection />
      <VerticalLine />
      <LastSection />
      <VerticalLine />
      <RightSection /> 
    </div>
    <div>
    <Footer/>
    </div>
    </>
  );
}



export default App;

