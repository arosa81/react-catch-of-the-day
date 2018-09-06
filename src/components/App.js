import React, { Component } from 'react'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import { connect } from 'react-redux';
import Fish from './Fish';
import base from '../base';
import { addFish } from '../actions/inventory';
import { addOrder } from '../actions/orders';
import sampleFishes from '../sample-fishes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fishes: {}
    }
  }
  initFishes = () => this.props.loadSampleFishesDispatch(sampleFishes)
  
  componentDidMount() {
    const { match, addOrder } = this.props;
    this.initFishes();  //initialize app with sample fishes

    // get local storage items and add them back to app order state
    const localStorageRef = localStorage.getItem(match.params.storeID);
    if (localStorageRef) {
      addOrder(JSON.parse(localStorageRef))
    }
    
    this.ref = base.syncState(`${match.params.storeID}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const { fishes, match } = this.props;

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(fishes).map((fish) => (
              <Fish key={fish} fish={fishes[fish]} index={fish} match={match} />
            ))}
          </ul>
        </div>
        <Order match={match}/>
        <Inventory />
      </div>
    )
  }
}

const mapStateToProps = ({ fishReducer, orderReducer }) => {
return {
  fishes: fishReducer.fishes,
  orders: orderReducer.orders,
}}

const mapDispatchToProps = (dispatch) => ({
  loadSampleFishesDispatch: (fish) => dispatch(addFish(fish)),
  addOrder: (order) => dispatch(addOrder(order)),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
