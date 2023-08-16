import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from './Carousel';
import Banner from './Banner';
import './Home.css';
import BannerCart from './BannerCart';
import Testimonials from './Testimonials';
import CardCarousel from './CardCarousel';
import Footer from './Footer';

// Import images
import YouChoose from '../images/you-choose.svg';
import WeDeliver from '../images/we-deliver.svg';
import YouCook from '../images/you-cook.svg';
import CookLikeChef from '../images/cook-like-chef.svg';
import SaveYouMoney from '../images/saves-you-money.svg';
import FreshProduce from '../images/fresh-produce.svg';
import ConsciousDecisions from '../images/conscious-decisions.svg';
import NoCommitment from '../images/no-commitment.svg';
import Convenience from '../images/convenience.svg';

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
      <section className="why-ucook">
        <h1 className="centered-heading">Why UCOOK?</h1>
        <div className="why-ucook-content">
          <div className="why-ucook-item">
            <img src={CookLikeChef} alt="Choose Icon" />
            <h1>Cook like a chef</h1>
            <p>Whip up restaurant-quality meals at home using fresh ingredients and simple-to-follow recipes. With 24 new dishes every week, you'll hone your kitchen skills and build your culinary repertoire.</p>
          </div>
          <div className="why-ucook-item">
            <img src={SaveYouMoney} alt="Workshops Icon" />
            <h1>Saves you money</h1>
            <p>With tasty meals from as low as R60 per person, we take care of all the portioning and measuring so you only get exactly what you need. No wastage, no queueing, and delivery straight to your door!</p>
          </div>
          <div className="why-ucook-item">
            <img src={FreshProduce} alt="Fresh Ingredients Icon" />
            <h1>Fresh produce</h1>
            <p>We source only the best and freshest ingredients that we can find from local farms and businesses. We choose reliable suppliers and aim for organic and free range wherever it's possible.</p>
          </div>
        </div>
        <div className="why-ucook-content">
          <div className="how-it-works-item">
            <img src={ConsciousDecisions} alt="Choose Icon" />
            <h1>Conscious decisions</h1>
            <p>We're all about making better eating choices, supporting local businesses, and reducing our carbon footprint. We consider what we do and the impact that our choices will have on the planet.</p>
          </div>
          <div className="why-ucook-item">
            <img src={NoCommitment} alt="Workshops Icon" />
            <h1>No commitment</h1>
            <p>You can pause at any time for flexibility that meets your needs. When you go away or have events planned for your evenings, you can pause without penalty or even change your delivery address.</p>
          </div>
          <div className="why-ucook-item">
            <img src={Convenience} alt="Fresh Ingredients Icon" />
            <h1>Convenience</h1>
            <p>Wave goodbye to meal-planning panic because we've taken the hassle out of deciding what’s for dinner. From Meal Kits to Market, our wide range of options ensures every meal is deliciously simple.</p>
          </div>
        </div>
        <Button variant="dark">GET STARTED NOW</Button>
      </section>
      <Testimonials />
      <CardCarousel />
      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
