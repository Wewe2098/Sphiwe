
import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../images/carousel-1.jpg';
import CarouselImage2 from '../images/carousel-2.jpg';
import CarouselImage3 from '../images/carousel-3.jpg';
import './Carousel.css';

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="banner-2">
        <div className="banner-2-content">
          <div className="text">
            <h1>Dinner, made easy</h1>
            <h3>Fresh ingredients from the farm</h3>
            <p>We deliver easy to follow and delicious recipes, and perfectly pre-portioned fresh ingredients to your door every week.</p>
            <Button variant="success">Select Meals</Button>
          </div>
          <div className="image">
            <img src={CarouselImage1} alt="Banner-2" />
          </div>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
          <div className="banner-2">
            <div className="banner-2-content">
              <div className="text">
                <h1>Dinner, made easy</h1>
                <h3>Fresh ingredients from the farm</h3>
                <p>We deliver easy to follow and delicious recipes, and perfectly pre-portioned fresh ingredients to your door every week.</p>
                <Button variant="success">Select Meals</Button>
              </div>
              <div className="image">
                <img src={CarouselImage2} alt="Banner-2" />
              </div>
            </div>
          </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="banner-2">
        <div className="banner-2-content">
          <div className="text">
            <h1>Dinner, made easy</h1>
            <h3>Fresh ingredients from the farm</h3>
            <p>We deliver easy to follow and delicious recipes, and perfectly pre-portioned fresh ingredients to your door every week.</p>
            <Button variant="success">Select Meals</Button>
          </div>
          <div className="image">
            <img src={CarouselImage3} alt="Banner-2" />
          </div>
        </div>
      </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
