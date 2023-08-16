import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="keep-in-touch">
          <h3>KEEP IN TOUCH WITH OUR KITCHEN</h3>
          <p>Enter your email</p>
          <button className="sign-up-button">SIGN ME UP</button>
        </div>
        <div className="footer-links">
          <div className="product-links">
            <h4>PRODUCT</h4>
            <ul>
              <li>MEAL KITS</li>
              <li>FROZEN</li>
              <li>WINE</li>
              <li>MARKET</li>
            </ul>
          </div>
          <div className="company-links">
            <h4>COMPANY</h4>
            <ul>
              <li>ABOUT</li>
              <li>CAREERS</li>
              <li>RECYCLING</li>
            </ul>
          </div>
          <div className="support-links">
            <h4>SUPPORT</h4>
            <ul>
              <li>FAQ'S</li>
              <li>CONTACT</li>
              <li>021 447 4424</li>
              <li>072 020 1555</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>2023 © UCOOK. All rights reserved by The Supper Society Proprietary Limited | Liquor License: WCP/042073 | GAU/10615</p>
        <div className="legal-links">
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Referral Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
