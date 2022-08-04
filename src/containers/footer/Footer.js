import React from 'react';
// import hwLogo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="hw__footer section__padding">
    <div className="hw__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    {/* <div className="hw__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="hw__footer-links">
      <div className="hw__footer-links_logo">
        {/* <img src={hwLogo} alt="hw_logo" /> */}
      </div>
      <div className="hw__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="hw__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      </div>

    <div className="hw__footer-copyright">
      <p>@2022 Hostel-Website. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;