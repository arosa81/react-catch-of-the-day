import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import { addFish } from '../actions/inventory';
// import sampleFishes from '../sample-fishes';

class Inventory extends Component {
  // loadSampleFishes = () => this.props.loadSampleFishesDispatch(sampleFishes)
  render() {
    const { fishes } = this.props;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(fishes).map((fish, index) => (
          <EditFishForm key={fish} fish={fishes[fish]} />
        ))}
        <AddFishForm />
        {/* <button onClick={this.loadSampleFishes} >Load Sample Fishes</button> */}
      </div>
    );
  }
}

const mapStatetoProps = ({ fishReducer }) => ({
  fishes: fishReducer.fishes,
});

function mapDispatchToProps(dispatch) {
  return {
    loadSampleFishesDispatch: fish => dispatch(addFish(fish)),
  };
}

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Inventory);
