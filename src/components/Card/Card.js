import React from 'react';
import './Card.scss'

const Card = ({ heading, imgName }) => {
  return (
    <div className="card">
      <div className="img-bg shadow" style={{ backgroundImage: `url(/images/${imgName}.jpg)` }}></div>
      <h3 className="heading">{heading}</h3>
    </div >
  );
};

export default Card;