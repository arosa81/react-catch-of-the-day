import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { formatPrice } from '../utils/helpers';
import { addOrder } from '../actions/orders';

class Fish extends Component {
  addToOrder = () => {
    const { orders, index, addFishOrder } = this.props;
    orders[index] = orders[index] + 1 || 1;
    addFishOrder(orders);
  };

  render() {
    const { fish } = this.props;
    const { name, image, desc, price, status } = fish;
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
  addFishOrder: order => dispatch(addOrder(order)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fish);

Fish.propTypes = {
  orders: PropTypes.object.isRequired,
  index: PropTypes.string,
  fish: PropTypes.object.isRequired,
  addFishOrder: PropTypes.func,
};
