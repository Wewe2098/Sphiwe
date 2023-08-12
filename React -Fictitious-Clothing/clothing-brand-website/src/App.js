import React from 'react';
import HeaderBar from './header'; 
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import Profile from './profile'; 
import Shop from './shop'; 
import Legal from './legal';
import Product from './product';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images
import image_1 from './images/image_1.jpg';
import image_2 from './images/image_2.jpg';
import image_3 from './images/image_3.jpg';
import image_4 from './images/image_4.jpg';
import image_5 from './images/image_5.jpg';
import image_6 from './images/image_6.jpg';
import image_7 from './images/image_7.jpg';
import image_8 from './images/image_8.jpg';
import image_9 from './images/image_9.jpg';

const App = () => {
  const isLoggedIn = false;

  const products = [
    {
      price: 19.99,
      description: 'Desk Fan',
      imageUrl: image_1, 
    },
    {
      price: 29.99,
      description: 'Table Lamp',
      imageUrl: image_2,
    },
    {
      price: 39.99,
      description: 'Hanging Rope Chair',
      imageUrl: image_3, 
    },
    {
      price: 79.99,
      description: 'Hanging Rope Chair',
      imageUrl: image_4, 
    },
    {
      price: 69.99,
      description: 'Gym Bag Set',
      imageUrl: image_5,
    },
    {
      price: 39.99,
      description: 'Cocktail Shaker Bartender',
      imageUrl: image_6, 
    },
    {
      price: 49.99,
      description: 'Play Yard',
      imageUrl: image_7, 
    },
    {
      price: 99.99,
      description: 'Baby Bathtub',
      imageUrl: image_8,
    },
    {
      price: 89.99,
      description: 'Lounger Chair',
      imageUrl: image_9, 
    },
  ];

  const location = useLocation();

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
