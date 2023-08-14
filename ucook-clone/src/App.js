import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Carousel from './components/Carousel';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Market from './components/Market';
import MealKids from './components/Meal-Kit';
import Frozen from './components/Frozen';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Carousel />
      <Testimonials />
      <Market /> 
      <MealKids />
      <Frozen />
      <Footer />
    </div>
  );
};

export default App;
