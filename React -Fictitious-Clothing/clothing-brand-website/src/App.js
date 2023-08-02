import React from 'react';
import Header from './header';
import LandingPage from './LandingPage';
import Product from './product';
import './App.css'; // Your custom CSS styles or Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  const isLoggedIn = false;

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
      <div className="container mt-4">
        <LandingPage />
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
