import React, { Component, Fragment } from 'react';

class StorePicker extends Component {
  state = {
    storeName: '',
  }

  goToStore = (event) => {
    event.preventDefault();
    console.log(this.state.storeName);
    this.props.history.push(`/store/${this.state.storeName}`);
  }

  handleStoreNameChange = (event) => {
    const value = event.target.value;

    this.setState(() => ({storeName: value}));
  }
  
  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            required
            placeholder="Store Name"
            value={this.state.storeName}
            onChange={this.handleStoreNameChange}
          />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;