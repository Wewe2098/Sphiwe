import React from 'react';
import Header from './header';
import LandingPage from './LandingPage';
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
