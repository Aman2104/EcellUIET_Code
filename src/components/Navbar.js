import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <header>
      <nav className='container'>
        <div className="logo">Logo</div>
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle" className="toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
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
    </header>
  );
}

export default Navbar;




