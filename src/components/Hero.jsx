import React from 'react';
// import '../css/NavBar.css'
import photo_grid from '../assets/photo-grid.png'

const Hero = () => {
  return (
    <div className='hero-content'>
        <div className="shadow"></div>
        <div className="photo-grid">
            <img className="hero-grid" src={photo_grid} alt="photo_grid" />
        </div>
    </div>
  );
}

export default Hero;
