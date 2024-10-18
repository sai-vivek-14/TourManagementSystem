import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './css_files/footer.css';

const Footer = () => {
  return (
    <div className="main-foot">
      <div className="foot-contact">
        <FontAwesomeIcon icon={faEnvelope} aria-label="Email" className="icon-spacing" /> 
        <FontAwesomeIcon icon={faInstagram} aria-label="Instagram" className="icon-spacing" /> 
        <FontAwesomeIcon icon={faFacebook} aria-label="Facebook" className="icon-spacing" />
      </div>
      <div className="foot-text">
        <p className="footer-heading">Stay Connected with Us</p>
        <p>Email: vistasta@gmail.com | Phone: +91 9177870208</p>
        <p>Follow us on social media for the latest updates and offers.</p>
        <p>&copy; 2024 Visasta. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
