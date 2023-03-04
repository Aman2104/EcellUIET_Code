import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        LOGO
      </div>
      <label className='hamburger' htmlFor="toggle">&#9776;</label>
      <input type="checkbox" id="toggle" />
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Past Events</a></li> 
        <li><a href="/">Gallery</a></li>
        <li><a href="/">IIC</a></li>
        <li><a href="/">Interview Result</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

