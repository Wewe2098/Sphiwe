import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ name, price, description, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: R{price}</p>
      <Link to="/InterestCalculator" className="btn btn-primary">Add to card</Link>
    </div>
  );
};

export default Product;
