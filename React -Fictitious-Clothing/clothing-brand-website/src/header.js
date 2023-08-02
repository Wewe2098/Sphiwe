import React from 'react';
import logo from './logo.png';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a href="/" className="navbar-brand"><img src={logo} alt="Logo" />
        </a>
        <div className="company-name">Sphiwe's Brand</div>
        <div className="navbar-nav ms-auto">
          <span className="nav-item nav-link">
            {isLoggedIn ? 'Welcome User' : 'Please Sign In'}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
