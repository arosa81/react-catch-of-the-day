import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../utils/helpers';

class Fish extends Component {
  render() {
    console.log("FISH PROP: ", this.props);
    const { name, image, desc, price, status } = this.props.fish;

    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>Add to Cart</button>
      </li>
    )
  }
}

const mapStateToProps = ({ fishReducer }) => ({
  fishes: fishReducer.fishes,
})

export default connect(mapStateToProps)(Fish)
