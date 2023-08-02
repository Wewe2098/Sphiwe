import React from 'react';
import Header from './Header';
import LandingPage from './LandingPage';
import Product from './Product';
import './App.css'; // Your custom CSS styles or Bootstrap styles

const App = () => {
  const isLoggedIn = false; // Set this boolean based on your login state

  const products = [
    {
      name: 'Product 1',
      price: 19.99,
      description: 'This is a description for Product 1.',
    },
    {
      name: 'Product 2',
      price: 29.99,
      description: 'This is a description for Product 2.',
    },
    {
      name: 'Product 3',
      price: 39.99,
      description: 'This is a description for Product 3.',
    },
  ];

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <LandingPage />
      <div className="products-container">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default App;
