
import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../images/carousel-1.jpg';
import CarouselImage2 from '../images/carousel-2.jpg';
import CarouselImage3 from '../images/carousel-3.jpg';
import CarouselImage4 from '../images/carousel-4.jpg';
import './Carousel.css';

const CardCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item className='card-carousel'>
      <div className='card-row'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={CarouselImage1} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={CarouselImage2} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={CarouselImage3} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={CarouselImage4} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        </div>
      </Carousel.Item>
      <Carousel.Item className='card-carousel'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item className='card-carousel'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item className='card-carousel'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
      </Carousel.Item>
      <Carousel.Item className='card-carousel'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
        </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
  );
};

export default CardCarousel;
