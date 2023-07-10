import React from 'react'
import './navbar.css'
import { useDencrypt } from 'use-dencrypt-effect';

function Navbar() {
  const [value, setValue] = useDencrypt("ByteBaker");
  return(
      <nav className="navbar1">
          <div className="navbar-title">
              <span className="navbar-name" onClick={()=>setValue("ByteBaker")}>{value}</span>
          </div>
      </nav>
    );
}

export default Navbar;