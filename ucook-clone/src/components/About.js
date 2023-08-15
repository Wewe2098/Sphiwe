// About.js
import React from 'react';
import Card from './Card';

const About = () => {
  return (
    <section className="about">
      <h2>About Cooking</h2>
      <div className="card-container">
        <Card
          title="Healthy Recipes"
          content="Discover a variety of healthy and delicious recipes to enjoy with your family."
        />
        <Card
          title="Culinary Techniques"
          content="Learn essential cooking techniques from expert chefs to enhance your culinary skills."
        />
        <Card
          title="Seasonal Ingredients"
          content="Explore the benefits of cooking with fresh, seasonal ingredients for flavorful meals."
        />
      </div>
    </section>
  );
};

export default About;
