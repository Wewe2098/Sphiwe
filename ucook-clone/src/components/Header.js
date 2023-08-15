// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Header.css';
import logo from '../images/large.svg';

const Header = () => {
  const numberOfItemsInBasket = 3;
  return (
    <header className="header-container">
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Meal Kits" id="products-dropdown">
              <NavDropdown.Item as={Link} to="/mealkit">Meal Kit Menu</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mealkit">Plans & Pricing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mealkit">Our Suppliers</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/frozen">Frozen</Nav.Link>
            <NavDropdown title="Wine" id="wine-dropdown">
              <NavDropdown.Item as={Link} to="/wine">This Month's Selection</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wine">Featured Wine Farms</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/market">Market</Nav.Link>
            <Nav.Link as={Link} to="/weekendboxes">Weekend Boxes</Nav.Link>
            <NavDropdown title="About Ucook" id="about-dropdown">
              <NavDropdown.Item as={Link} to="/about">Meal Kits</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">Craft Meals</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">Kids Meals</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">Baby Food</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">Wine</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">About Ucook</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/basket">
              <i className="fas fa-shopping-basket"></i> Basket <span className="badge">3</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
