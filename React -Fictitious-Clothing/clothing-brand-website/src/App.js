import React from 'react';
import HeaderBar from './header'; 
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Profile from './profile'; 
import Shop from './shop'; 
import Legal from './legal';
import Product from './product';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const isLoggedIn = false;

  const products = [
    {
      name: 'Product 1',
      price: 19.99,
      description: 'Fan',
      imageUrl: './images/image', 
    },
    {
      name: 'Product 2',
      price: 29.99,
      description: 'This is a description for Product 2.',
      imageUrl: '/path/to/product2-image.jpg',
    },
    {
      name: 'Product 3',
      price: 39.99,
      description: 'This is a description for Product 3.',
      imageUrl: '/path/to/product3-image.jpg', 
    },
  ];

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
        <div className="row mt-4">
          {products.map((product, index) => (
            <div key={index} className="col-md-4">
              <Product {...product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
