
import React from 'react';

const Product = ({ name, price, description, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: R{price}</p>
    </div>
  );
};

export default Product;
