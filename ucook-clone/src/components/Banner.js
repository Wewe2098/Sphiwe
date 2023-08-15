
import React from 'react';
import './Banner.css';
import bannerImage from '../images/banner-image.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" />
      <div className="banner-text">
        <h2>Welcome to Our Cooking Platform</h2>
        <p>Discover delicious recipes and culinary adventures!</p>
      </div>
    </div>
  );
};

export default Banner;
