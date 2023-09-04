
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import './Header.css';

const HeaderBar = ({ isLoggedIn }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/" className="navbar-brand">Sphiwe's Brand</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">Profile</Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">Shop</Link>
              </li>
              <li className="nav-item">
                <Link to="/legal" className="nav-link">Legal</Link>
              </li>
              <li className="nav-item">
                <Link to="/InterestCalculator" className="nav-link">Interest Calculator</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav ms-auto">
            <span className="nav-item nav-link">
              {isLoggedIn ? 'Welcome User' : 'Please Sign In'}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderBar;
