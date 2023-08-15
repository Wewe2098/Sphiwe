import React from 'react';
import Carousel from './Carousel';
import Banner from './Banner';
import './Home.css';
import BannerCart from './BannerCart';
import Testimonials from './Testimonials';

// Import images
import YouChoose from '../images/you-choose.svg';
import WeDeliver from '../images/we-deliver.svg';
import YouCook from '../images/you-cook.svg';

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <section className="how-it-works">
        <h1 className="centered-heading">How does it work?</h1>
        <div className="how-it-works-content">
          <div className="how-it-works-item">
            <img src={YouChoose} alt="Choose Icon" />
            <h1>1. You choose</h1>
            <p>Sign up, pick from 24 new recipes every week with orders closing at 9am on Wednesday, and pause your account at any time</p>
          </div>
          <div className="how-it-works-item">
            <img src={WeDeliver} alt="Workshops Icon" />
            <h1>2. We deliver</h1>
            <p>Get a weekly delivery of perfectly portioned fresh produce, shipped in an insulated cold box</p>
          </div>
          <div className="how-it-works-item">
            <img src={YouCook} alt="Fresh Ingredients Icon" />
            <h1>3. You cook</h1>
            <p>Get simple-to-follow recipes and create restaurant-quality dishes in your own home with no more meal planning or food waste</p>
          </div>
        </div>
        <p className="faq-heading">Got more Questions? - Check out our <a href="/faq" className="faq-link">FAQ's</a></p>
      </section>
      <BannerCart />
      <section className="how-it-works">
        <h1 className="centered-heading">How does it work?</h1>
        <div className="how-it-works-content">
          <div className="how-it-works-item">
            <img src={YouChoose} alt="Choose Icon" />
            <h1>1. You choose</h1>
            <p>Sign up, pick from 24 new recipes every week with orders closing at 9am on Wednesday, and pause your account at any time</p>
          </div>
          <div className="how-it-works-item">
            <img src={WeDeliver} alt="Workshops Icon" />
            <h1>2. We deliver</h1>
            <p>Get a weekly delivery of perfectly portioned fresh produce, shipped in an insulated cold box</p>
          </div>
          <div className="how-it-works-item">
            <img src={YouCook} alt="Fresh Ingredients Icon" />
            <h1>3. You cook</h1>
            <p>Get simple-to-follow recipes and create restaurant-quality dishes in your own home with no more meal planning or food waste</p>
          </div>
        </div>
        <div className="how-it-works-content">
          <div className="how-it-works-item">
            <img src={YouChoose} alt="Choose Icon" />
            <h1>1. You choose</h1>
            <p>Sign up, pick from 24 new recipes every week with orders closing at 9am on Wednesday, and pause your account at any time</p>
          </div>
          <div className="how-it-works-item">
            <img src={WeDeliver} alt="Workshops Icon" />
            <h1>2. We deliver</h1>
            <p>Get a weekly delivery of perfectly portioned fresh produce, shipped in an insulated cold box</p>
          </div>
          <div className="how-it-works-item">
            <img src={YouCook} alt="Fresh Ingredients Icon" />
            <h1>3. You cook</h1>
            <p>Get simple-to-follow recipes and create restaurant-quality dishes in your own home with no more meal planning or food waste</p>
          </div>
        </div>
        <p className="faq-heading">Got more Questions? - Check out our <a href="/faq" className="faq-link">FAQ's</a></p>
      </section>
      <Testimonials />
      <Carousel />
    </div>
  );
};

export default Home;
