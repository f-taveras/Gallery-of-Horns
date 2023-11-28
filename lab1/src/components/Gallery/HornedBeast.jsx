import React from 'react';

function HornedBeast(props) {
  return (
    <div className="horned-beast">
      <h2>{props.title}</h2>
      <img src={props.imageUrl} alt={props.title} />
      <p>{props.description}</p>
    </div>
  );
}

export default HornedBeast;
