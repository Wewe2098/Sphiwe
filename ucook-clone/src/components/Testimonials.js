import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rachel Kolisi',
      text: 'Always grateful for UCOOK for weeks like these. Its a quick and easy process, and their meals are always free range, wholesome and nutritious.',
      rating: 5,
    },
    {
      name: 'Sarah Graham',
      text: 'We get UCOOK pretty much every other week because it’s delicious, sustainable and such a fun way to cook out-the-box weeknight meals',
      rating: 5,
    },
    {
        name: 'Amy Hopkins',
        text: 'Using a company like UCOOK has helped me save time in periods of high stress and they really do source such amazing ingredients.',
        rating: 5,
      },
  ];

  return (
    <section className="testimonials">
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
