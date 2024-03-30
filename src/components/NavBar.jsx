import React from 'react';
// import '../css/NavBar.css'
import airbnb_logo from '../assets/airbnb-logo.png'

const NavBar = () => {
  return (
    <div>
      {/* Navbar with logo */}
      <div className="navbar">
        <img className="logo" src={airbnb_logo} alt="Logo" />
      </div>
    </div>
  );
}

export default NavBar;
