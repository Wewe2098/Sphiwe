import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBBadge, MDBIcon, MDBContainer, MDBNavbarBrand } from 'mdb-react-ui-kit';
import './Header.css';
import logo from '../images/large.svg';

const Header = () => {
  return (
    <header className="header-container">
      <MDBNavbar fixed='bottom' light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img src="/path-to-your-logo.png" alt="Logo" />
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <nav>
        <ul className="nav-list">
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
          <li><a href="/meal-kids">Meal Kids</a></li>
          <li><a href="/frozen">Frozen</a></li>
          <li><a href="/wine">Wine</a></li>
          <li><a href="/market">Market</a></li>
          <li><a href="/weekend-boxes">Weekend Boxes</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/partnerwithus">Partner with Us</a></li>
        </ul>
      </nav>
      <div className="user-buttons">
        <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>
                  <MDBBadge pill color='danger'>!</MDBBadge>
                  <span>
                    <MDBIcon fas icon='shopping-cart'></MDBIcon>
                  </span>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBContainer>
        </MDBNavbar>
      </div>
    </header>
  );
};

export default Header;