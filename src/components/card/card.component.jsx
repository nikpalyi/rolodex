import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://source.unsplash.com/collection/${props.monster.id}/280x280`}
    />
    <h3 style={{ fontSize: '2rem' }}>{props.monster.name} </h3>
    <p style={{ fontSize: '1.5rem' }}> {props.monster.email}</p>
  </div>
);
