
import React from 'react';
import Card from './Card';

const HomeCard = ({ title, content }) => {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{content}</p>
    </Card>
  );
};

export default HomeCard;
