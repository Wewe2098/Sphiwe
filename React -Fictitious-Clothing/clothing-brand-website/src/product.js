import React from 'react';

const Product = ({ name, price, description }) => {
  return (
    <div className="product card p-3 mb-4">
      <h3 className="card-title">{name}</h3>
      <p className="card-text">Price: ${price}</p>
      <p className="card-text">{description}</p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
};

export default Product;
