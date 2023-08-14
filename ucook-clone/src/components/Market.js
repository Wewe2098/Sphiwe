import React from 'react';
import Card from './Card';

const Market = () => {
  return (
    <section className="market">
      <h2>Market</h2>
      <div className="card-container">
        <Card
          title="Fresh Produce"
          content="Browse a wide selection of fresh fruits and vegetables."
        />
        <Card
          title="Organic Options"
          content="Discover organic products sourced directly from local farms."
        />
      </div>
    </section>
  );
};

export default Market;
