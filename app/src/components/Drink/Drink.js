import React from 'react';
import './Drink.css';
import image from './wushiland-jasmine-green-milk-tea-tiny-boba.jpg';

function Drink() {
  return (
    <div>
      <div className="drink border">
        <img className="drink-thumbnail" src={image} />
        <h2 className="">Jasmine Green Milk Tea</h2>
        boba
      </div>
    </div>
  );
}

export default Drink;
