
import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../images/carousel-1.jpg';
import CarouselImage2 from '../images/carousel-2.jpg';
import CarouselImage3 from '../images/carousel-3.jpg';
import CarouselImage4 from '../images/carousel-4.jpg';
import './Carousel.css';

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item className='dinner'>
        <div className="banner-2">
          <div className="banner-2-content">
            <div className="text-2">
              <h1>Celebrate Creation</h1>
              <h1>Wines</h1>
              <p>and get 25% off when you buy Any 3 bottles</p>
              <Button variant="outline-light">SHOP WINE</Button>
            </div>
            <div className="image-2">
              <img src={CarouselImage1} alt="Banner-2" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='food'>
        <div className="banner-2">
          <div className="banner-2-content">
            <div className="text-2">
              <h1>Cosy up with comfort</h1>
              <h1>Food</h1>
              <p>Our range of Frozen Craft Meals are quick, easy and delicious</p>
              <Button variant="outline-light">SHOP WINE</Button>
            </div>
            <div className="image-2">
              <img src={CarouselImage2} alt="Banner-2" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='toast'>
        <div className="banner-2">
          <div className="banner-2-content">
            <div className="text-2">
              <h1>Let's raise a toast</h1>
              <p>to UCOOK Market's Bread & Bakery range</p>
              <Button variant="outline-light">SHOP MARKET</Button>
            </div>
            <div className="image-2">
              <img src={CarouselImage3} alt="Banner-2" />
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className='roasted'>
        <div className="banner-2">
          <div className="banner-2-content">
            <div className="text-2">
              <h1>Try something with</h1>
              <h1>roasted flavours</h1>
              <p>Like our exquisite Moroccan Beet Labneh & Lamb</p>
              <Button variant="outline-light">ORDER NOW</Button>
            </div>
            <div className="image-2">
              <img src={CarouselImage4} alt="Banner-2" />
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
