import React from 'react';
import { Image, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImage from '../images/meal-kit-banner.jpg';
import './BannerCart.css';


const BannerCart = () => {
  return (
    <div className="banner-cart">
      <Image src={bannerImage} fluid />
      <Link to="/Market">
        <Card className="banner-overlay">
          <Card.Body>
            <Card.Title>New chefs!</Card.Title>
            <Card.Text>
              Get 30% off your first Meal Kit order.
              <br />
              Add code <strong>#WELCOME30</strong> at checkout. T&C's Apply.
            </Card.Text>
            <Button variant="success">Order Now</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default BannerCart;

