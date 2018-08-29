import React, { Component } from 'react'
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import { connect } from 'react-redux';
import Fish from './Fish';

class App extends Component {
  render() {
    const { fishes } = this.props;

    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(fishes).map((fish) => (
              <Fish key={fish} fish={fishes[fish]} fishKey={fish} />
            ))}
          </ul>
        </div>
        <Inventory />
        <Order />
      </div>
    )
  }
}

const mapStateToProps = ({ fishReducer }) => ({
  fishes: fishReducer.fishes,
})

export default connect(mapStateToProps)(App);
