
import React from 'react';
import Carousel from './Carousel';
import Banner from './Banner';
import HomeCard from './Card';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <section className="home-cards">
        <div className="card-container">
          <HomeCard
            title="1.You choose"
            content="Explore a wide range of delicious recipes from various cuisines."
          />
          <HomeCard
            title="Culinary Workshops"
            content="Join our workshops to learn essential cooking techniques from experts."
          />
          <HomeCard
            title="Fresh Ingredients"
            content="Cook with high-quality, seasonal ingredients for flavorful meals."
          />
        </div>
      </section>
      <Carousel />
    </div>
  );
};

export default Home;
