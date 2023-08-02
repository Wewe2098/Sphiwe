import React from 'react';

const Header = ({ isLoggedIn }) => {
  return (
    <header>
      <div className="logo">Your Logo</div>
      <div className="company-name">Your Clothing Brand</div>
      <div className="welcome-message">
        {isLoggedIn ? 'Welcome User' : 'Please Sign In'}
      </div>
    </header>
  );
};

export default Header;
