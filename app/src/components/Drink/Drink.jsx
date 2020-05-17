import React from 'react';
import './Drink.css';
import image from './wushiland-jasmine-green-milk-tea-tiny-boba.jpg';

class Drink extends React.Component {
  constructor(props) {
    super(props);

    this.state = { image };
  }

  render() {
    const { image: drinkImage } = this.state;

    return (
      <div>
        <div className="drink border">
          <img
            className="drink-thumbnail border"
            src={drinkImage}
            alt="Drink"
          />
          <h2 className="border">
            Jasmine Green Milk Tea
          </h2>
          boba
        </div>
      </div>
    );
  }
}

export default Drink;
