import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/market">Market</a></li>
          <li><a href="/meal-kids">Meal Kids</a></li>
          <li><a href="/frozen">Frozen</a></li>
          <li><a href="/wine">Wine</a></li>
          <li><a href="/weekend-boxes">Weekend Boxes</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/partner-with-us">Partner with Us</a></li>
        </ul>
      </nav>
      <div className="user-buttons">
        <button className="login-button">Log In</button>
        <button className="signup-button">Sign Up</button>
        <div className="cart-icon">Cart</div>
      </div>
    </header>
  );
};

export default Header;
