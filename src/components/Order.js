import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../utils/helpers';

class Order extends Component {
  componentDidUpdate() {
    const { match, orders } = this.props;
    localStorage.setItem(match.params.storeID, JSON.stringify(orders));
  }

  renderOrderList = order => {
    const { fishes, orders } = this.props;
    const fish = fishes[order];
    const count = orders[order];

    const isAvailable = fish && fish.status === 'available';
    /* Make sure fish is loaded before we continue */
    if (!fish) return null; // To render out nothing
    return !isAvailable ? (
      <li key={order}>Sorry {fish ? fish.name : fish} is no longer available</li>
    ) : (
      <li key={order}>
        {count} lbs {fish.name}
        {formatPrice(fish.price)}
      </li>
    );
  };

  render() {
    const { total, ordersArray } = this.props;

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{ordersArray.map(this.renderOrderList)}</ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fishReducer, orderReducer }) => {
  const ordersArray = Object.keys(orderReducer.orders);

  const total = ordersArray.reduce((prevTotal, key) => {
    const fish = fishReducer.fishes[key];
    const count = orderReducer.orders[key];
    const isAvailable = fish && fish.status === 'available';
    if (isAvailable) {
      return prevTotal + count * fish.price;
    }
    return prevTotal;
  }, 0);

  return {
    fishes: fishReducer.fishes,
    orders: orderReducer.orders,
    ordersArray,
    total,
  };
};

export default connect(mapStateToProps)(Order);
