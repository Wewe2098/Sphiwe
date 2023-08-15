
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../images/carousel-1.jpg';
import CarouselImage2 from '../images/carousel-2.jpg';
import CarouselImage3 from '../images/carousel-3.jpg';

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={CarouselImage1} alt="Slide 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselImage2} alt="Slide 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselImage3} alt="Slide 3" />
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageCarousel;
