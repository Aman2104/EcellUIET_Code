import React from 'react';
import '../styles/navbar.css';
import Logo from '../assets/logos/ecell_logo.png';
import pdf from '../assets/posters/Hired Members Notice.pdf';
function Navbar() {
  return (
    <header >
      <nav className='container'>
        <div className="logo"><a href="/">
          <img style={{height:"80px", padding:"0px"}} src={Logo} alt="" /></a></div>
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
          <li><a href={pdf} target={'_blank'} rel="noreferrer">Interview Result</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;