import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFish } from '../actions/inventory';

class AddFishForm extends Component {
  state = {
    fishID: 0,
    name: '',
    price: 0,
    status: 'available',
    desc: '',
    image: '/images/Alex_Swim.jpg',
  };

  handleChange = event =>
    event.target.name === 'price'
      ? this.setState({ [event.target.name]: parseFloat(event.target.value) })
      : this.setState({ [event.target.name]: event.target.value });

  handleFishIDChange = () => {
    const { numFishes } = this.props;
    // TODO: Add check for all fields filled
    return this.setState({ fishID: numFishes + 1 });
  };

  resetState = () =>
    this.setState({
      fishID: 0,
      name: '',
      price: 0,
      status: 'available',
      desc: '',
      image: '/images/Alex_Swim.jpg',
    });

  createFish = event => {
    event.preventDefault();
    const { addFishDispatch, numFishes } = this.props;
    addFishDispatch({
      [`fish${numFishes + 1}`]: {
        ...this.state,
      },
    });
    this.resetState();
  };

  render() {
    const { name, price, status, desc, image } = this.state;

    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          value={price}
          onChange={this.handleChange}
        />
        <select
          name="status"
          type="text"
          placeholder="Status"
          value={status}
          onChange={this.handleChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          type="text"
          placeholder="Desc"
          value={desc}
          onChange={this.handleChange}
        />
        <input
          name="image"
          type="text"
          placeholder="Image"
          value={image}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleFishIDChange}>
          Add Fish
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ fishReducer }) => {
  const numFishes = Object.keys(fishReducer.fishes).length;
  return {
    numFishes,
  };
};

const mapDispatchToProps = dispatch => ({
  addFishDispatch: fish => dispatch(addFish(fish)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFishForm);
