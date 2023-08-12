import React from 'react';
import HeaderBar from './header'; 
import LandingPage from './LandingPage';
import Product from './product';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
    <Router>
      <div>
        <HeaderBar isLoggedIn={isLoggedIn} />
        <div className="container mt-4">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/profile" render={() => <div>Profile Page</div>} />
            <Route path="/shop" render={() => <div>Shop Page</div>} />
            <Route path="/legal" render={() => <div>Legal Page</div>} />
          </Switch>
          <div className="row mt-4">
            {products.map((product, index) => (
              <div key={index} className="col-md-4">
                <Product {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;