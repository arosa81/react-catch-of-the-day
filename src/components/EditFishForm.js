import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editFish, deleteFish } from '../actions/inventory';

class EditFishForm extends Component {
  constructor(props) {
    super(props);
    const { fishID, name, price, status, desc, image } = props.fish;
    this.state = {
      fishID,
      name,
      price,
      status,
      desc,
      image,
    };
  }

  handleChange = event => {
    const { fish } = this.props;
    this.setState({ [event.target.name]: event.target.value });
    console.log('----------------', this.state);
  };

  updateFishFunc = event => {
    event.preventDefault();
    const { updateFish, fishID } = this.props;
    console.log('EDITING FISH: ', this.props, fishID);
    updateFish({ [fishID]: { ...this.state } });
    // this.setState(state => ({
    //   books: state.books.filter(b => b.id !== book.id).concat([book])
    // }))
  };

  deleteFishFunc = event => {
    event.preventDefault();
    const { removeFish, fishID, fishes } = this.props;
    fishes[fishID] = undefined;
    console.log('AFTER DELETION OF THIS FISH', fishes);
    delete fishes[fishID];
    removeFish(fishes);
  };

  render() {
    const { name, price, status, desc, image } = this.state;
    return (
      <form className="fish-edit" onSubmit={this.updateFishFunc}>
        <button type="button" onClick={this.deleteFishFunc}>
          Delete Fish
        </button>
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

const mapStateToProps = ({ fishReducer }) => ({
  fishes: fishReducer.fishes,
});

const mapDispatchToProps = dispatch => ({
  updateFish: fish => dispatch(editFish(fish)),
  removeFish: fish => dispatch(deleteFish(fish)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFishForm);
