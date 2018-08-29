import React, { Component } from 'react';
import AddFishForm from './AddFishForm';
import { connect } from 'react-redux';
import { addFish } from '../actions/inventory';
import sampleFishes from '../sample-fishes';

class Inventory extends Component {

  loadSampleFishes = () => {
    console.log('load sample fishes');
    this.props.loadSampleFishesDispatch(sampleFishes);
  } 

  render() {
    console.log("Inventory props", this.props);
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFishForm />
        <button onClick={this.loadSampleFishes} >Load Sample Fishes</button>
      </div>
    )
  }
}

const mapStatetoProps = ({ fishReducer }, props) => ({
  fishes: fishReducer.fishes
})

function mapDispatchToProps(dispatch) {
  return {
    loadSampleFishesDispatch: (fish) => dispatch(addFish(fish)),
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(Inventory);
