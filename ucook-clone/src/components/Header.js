import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import logo from '../images/large.svg';

const Header = () => {
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
            <NavDropdown to="/Mealkit" title="Meal Kits" id="products-dropdown">
              <NavDropdown.Item as={Link} to="/Mealkit">Meal Kit Menu</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Mealkit">Plans & Pricing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Mealkit">Our Suppliers</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Frozen">Frozen</Nav.Link>
            <NavDropdown to="/Wine" title="Wine" id="wine-dropdown">
              <NavDropdown.Item as={Link} to="/Wine">This Month's Selection</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Wine">Featured Wine Farms</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Market">Market</Nav.Link>
            <Nav.Link as={Link} to="/WeekendBoxes">Weekend Boxes</Nav.Link>
            <NavDropdown title="About Ucook" id="about-dropdown">
              <NavDropdown.Item as={Link} to="/About">Meal Kits</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/About">Craft Meals</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/About">Kids Meals</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/About">Baby Food</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/About">Wine</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/About">About Ucook</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/PartnerWithUs">Partner With Us</Nav.Link>
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
