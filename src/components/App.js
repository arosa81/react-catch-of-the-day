import React, { Component } from 'react'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends Component {
  fishes = {};

  addFish = (fish) => {
    this.fish = fish;
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Fresh Seafood Market"/>
        </div>
        <Inventory addFish={this.addFish} />
        <Order />
      </div>
    )
  }
}

export default App;
