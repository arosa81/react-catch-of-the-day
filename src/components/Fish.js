import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../utils/helpers';
import { addOrder } from '../actions/orders';

class Fish extends Component {
  addToOrder = () => {
    const { orders, index, addOrder } = this.props;
    orders[index] = orders[index] + 1 || 1;
    addOrder(orders);
  };

  render() {
    const { name, image, desc, price, status } = this.props.fish;
    const available = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        {available ? (
          <button type="button" onClick={this.addToOrder}>
            Add to Order
          </button>
        ) : (
          <button type="button" disabled={status}>
            Sold Out!
          </button>
        )}
      </li>
    );
  }
}

const mapStateToProps = ({ orderReducer }) => ({
  orders: orderReducer.orders,
});

const mapDispatchToProps = dispatch => ({
  addOrder: order => dispatch(addOrder(order)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fish);
