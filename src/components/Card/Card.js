import React from 'react';
import './Card.scss'

const Card = ({ heading, imgPath }) => {
  return (
    <div className="card">
      <div className="img-bg shadow" style={{ backgroundImage: `url(${imgPath})` }}></div>
      <h3 className="heading">{heading}</h3>
    </div >
  );
};

export default Card;