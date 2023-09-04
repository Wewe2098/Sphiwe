import React from 'react';
import HeaderBar from './components/Header'; 
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile'; 
import Shop from './components/Shop'; 
import Legal from './components/Legal';
import Product from './components/Product';
import InterestCalculator from './components/InterestCalculator';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
import image_1 from './components/images/image_1.jpg';
import image_2 from './components/images/image_2.jpg';
import image_3 from './components/images/image_3.jpg';
import image_4 from './components/images/image_4.jpg';
import image_5 from './components/images/image_5.jpg';
import image_6 from './components/images/image_6.jpg';
import image_7 from './components/images/image_7.jpg';
import image_8 from './components/images/image_8.jpg';
import image_9 from './components/images/image_9.jpg';

const App = () => {
  // Checking whether the user is logged in
  const isLoggedIn = false;
  // product data
  const products = [
    {
      price: 319.99,
      description: 'Desk Fan',
      imageUrl: image_1, 
    },
    {
      price: 429.99,
      description: 'Table Lamp',
      imageUrl: image_2,
    },
    {
      price: 1739.99,
      description: 'Hanging Rope Chair',
      imageUrl: image_3, 
    },
    {
      price: 679.99,
      description: 'Hanging Rope Chair',
      imageUrl: image_4, 
    },
    {
      price: 1769.99,
      description: 'Gym Bag Set',
      imageUrl: image_5,
    },
    {
      price: 539.99,
      description: 'Cocktail Shaker Bartender',
      imageUrl: image_6, 
    },
    {
      price: 749.99,
      description: 'Play Yard',
      imageUrl: image_7, 
    },
    {
      price: 299.99,
      description: 'Baby Bathtub',
      imageUrl: image_8,
    },
    {
      price: 2389.99,
      description: 'Lounger Chair',
      imageUrl: image_9, 
    },
  ];

  // Get the current location
  const location = useLocation();

  // Display products based on the current route
  const shouldDisplayProducts = location.pathname === '/shop' || location.pathname === '/';

  return (
    <div>
      <HeaderBar isLoggedIn={isLoggedIn} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/interest-calculator" element={<InterestCalculator />} />
        </Routes>
        {shouldDisplayProducts && (
          <div className="row mt-4">
            {products.map((product, index) => (
              <div key={index} className="col-md-4">
                <Product {...product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
