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

const App = () => {
  const isLoggedIn = false;

  const products = [
    {
      price: 19.99,
      description: 'Fan',
      imageUrl: '/images/image_1.jpg', 
    },
    {
      price: 29.99,
      description: 'Fan',
      imageUrl: '/images/image_2.jpg',
    },
    {
      price: 39.99,
      description: 'Fan',
      imageUrl: '/images/image_3.jpg', 
    },
    {
      price: 79.99,
      description: 'Fan',
      imageUrl: '/images/image_4.jpg', 
    },
    {
      price: 69.99,
      description: 'Fan',
      imageUrl: '/images/image_5.jpg',
    },
    {
      price: 39.99,
      description: 'Fan',
      imageUrl: '/images/image_6.jpg', 
    },
    {
      price: 49.99,
      description: 'Fan',
      imageUrl: '/images/image_7.jpg', 
    },
    {
      price: 99.99,
      description: 'Fan',
      imageUrl: '/images/image_8.jpg',
    },
    {
      price: 89.99,
      description: 'Fan',
      imageUrl: '/images/image_9.jpg', 
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
