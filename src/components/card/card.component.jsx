import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://source.unsplash.com/collection/${props.monster.id}/280x280`}
    />
    <h3>{props.monster.name} </h3>
    <p> {props.monster.email}</p>
  </div>
);

//src={`https://picsum.photos/id/${props.monster.id}/300/200`}

//https://source.unsplash.com/collection/${props.monster.id}/480x480
