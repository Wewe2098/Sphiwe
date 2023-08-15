
import React from 'react';
import Button from 'react-bootstrap/Button';
import './Banner.css'; 
import bannerImage from '../images/banner-image.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="text">
          <h1>Dinner, made easy</h1>
          <h3>Fresh ingredients from the farm</h3>
          <p>We deliver easy to follow and delicious recipes, and perfectly pre-portioned fresh ingredients to your door every week.</p>
          <Button variant="success">Select Meals</Button>
        </div>
        <div className="image">
          <img src={bannerImage} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
