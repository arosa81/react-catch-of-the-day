import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editFish } from '../actions/inventory';

class EditFishForm extends Component {
  constructor(props) {
    super(props);
    const { name, price, status, desc, image } = props.fish;
    this.state = {
      name,
      price,
      status,
      desc,
      image,
    };
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { name, price, status, desc, image } = this.state;

    return (
      <form className="fish-edit">
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
        <button type="submit">Add Fish</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editExistingFish: fish => dispatch(editFish(fish)),
});

export default connect(
  null,
  mapDispatchToProps
)(EditFishForm);
