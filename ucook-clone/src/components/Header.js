import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Offcanvas } from 'react-bootstrap';
import './Header.css';
import logo from '../images/large.svg';

const Header = () => {
  const [showBasket, setShowBasket] = useState(false);

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
        </Navbar.Collapse>
        </Navbar>
      <Navbar className="mr-auto">
        <Nav className="float-right">
          <Nav.Link as={Link} to="/login">Log In</Nav.Link>
          <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
          <Button variant="secondary" onClick={() => setShowBasket(true)}>
            <i className="fas fa-shopping-basket"></i></Button>
        </Nav>
      </Navbar>
      <Offcanvas show={showBasket} onHide={() => setShowBasket(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>On Demand order</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <p>Payment on checkout</p>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
