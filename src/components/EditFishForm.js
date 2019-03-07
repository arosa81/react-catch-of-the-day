import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    this.setState({ [event.target.name]: event.target.value });
  };

  updateStateFunc = (state, props) => ({
    [state.target.name]: props.target.value,
  });

  updateFishFunc = event => {
    event.preventDefault();
    const { updateFish } = this.props;
    const { fishID } = this.state;
    updateFish({ [`fish${fishID}`]: { ...this.state } });
  };

  deleteFishFunc = event => {
    event.preventDefault();
    const { removeFish, fishes } = this.props;
    const { fishID } = this.state;
    fishes[`fish${fishID}`] = undefined;
    delete fishes[`fish${fishID}`];
    removeFish(`fish${fishID}`);
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
        <button type="submit">Update Fish</button>
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

EditFishForm.propTypes = {
  fish: PropTypes.object.isRequired,
  fishes: PropTypes.object.isRequired,
  fishID: PropTypes.number,
  // key: PropTypes.object,
  updateFish: PropTypes.func.isRequired,
  removeFish: PropTypes.func.isRequired,
};
