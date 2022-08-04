import React from 'react';
import hostel from '../../assets/hostel.png';
import './header.css';

const Header = () => (
  <div className="hw__header section__padding" id="home">
    <div className="hw__header-content">
      <h1 className="gradient__text">Lets Find a perfect hostel which you can call  Home</h1>
      

      <div className="hw__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

    
    </div>

    <div className="hw__header-image">
      <img src={hostel} alt="demo"/>
    </div>
  </div>
);

export default Header;