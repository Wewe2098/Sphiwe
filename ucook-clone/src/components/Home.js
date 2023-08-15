// Home.js
import React from 'react';
import Carousel from './Carousel';
import Banner from './Banner'; // Import the new Banner component
import Card from './Card';

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <Banner />
      <section className="about">
        <h2>About Cooking</h2>
      </section>
    </div>
  );
};

export default Home;
