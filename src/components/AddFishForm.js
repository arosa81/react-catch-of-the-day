import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFish } from '../actions/inventory';

class AddFishForm extends Component {
  state = {
    name: '',
    price: 0,
    status: 'available',
    desc: '',
    image: '/images/Alex_Swim.jpg',
  };

  handleNameChange = event => this.setState({ name: event.target.value });

  handlePriceChange = event => this.setState({ price: parseFloat(event.target.value) });

  handleStatusChange = event => this.setState({ status: event.target.value });

  handleDescChange = event => this.setState({ desc: event.target.value });

  handleImageChange = event => this.setState({ image: event.target.value });

  createFish = event => {
    event.preventDefault();
    const { addFish } = this.props;
    // let fishObj = `fish${Date.now()}`;
    addFish({ fish: { ...this.state } });
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
          onChange={this.handleNameChange}
        />
        <input
          name="price"
          type="text"
          placeholder="Price"
          value={price}
          onChange={this.handlePriceChange}
        />
        <select
          name="status"
          type="text"
          placeholder="Status"
          value={status}
          onChange={this.handleStatusChange}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          type="text"
          placeholder="Desc"
          value={desc}
          onChange={this.handleDescChange}
        />
        <input
          name="image"
          type="text"
          placeholder="Image"
          value={image}
          onChange={this.handleImageChange}
        />
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addFish: fish => dispatch(addFish(fish)),
});

export default connect(
  null,
  mapDispatchToProps
)(AddFishForm);
