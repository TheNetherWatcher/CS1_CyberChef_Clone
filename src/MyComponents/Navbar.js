import React from 'react';
import './Navbar.css';
import logo from './logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar1">
      <div className="navbar-title">
        <img src={logo} alt="Company Logo" className="logo" />
        <span className="navbar-name">ByteBaker</span>
      </div>
    </nav>
  );
};

export default Navbar;



