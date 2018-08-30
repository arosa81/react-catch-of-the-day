import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../utils/helpers'; 

class Order extends Component {
  render() {
    const { orders, fishes, total } = this.props;
    
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <p>{orders}</p>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ fishReducer, orderReducer }) => {
  const orders = Object.keys(orderReducer.orders)
  const total = orders.reduce((prevTotal, key) => {
    const fish = fishReducer.fishes[key];
    const count = orderReducer.orders[key];
    const isAvailable = fish && fish.status === 'available';
    if (isAvailable) {
      return prevTotal + (count * fish.price);
    }
    return prevTotal;
  }, 0)

  return {
    fishes: fishReducer.fishes,
    orders,
    total,
  }
}

export default connect(mapStateToProps)(Order);
