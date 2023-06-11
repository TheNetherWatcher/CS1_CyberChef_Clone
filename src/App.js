import React from 'react';
import Navbar from './MyComponents/Navbar';
import './App.css';
import { LeftSection, RightSection, VerticalLine } from './MyComponents/splitscreen';

function App() {
  return (
    <>
    <div>
      <Navbar/>
     
    </div>
    <div className="app">
      <LeftSection />
      <VerticalLine />
      <RightSection />
    </div>
    </>
  );
}



export default App;

