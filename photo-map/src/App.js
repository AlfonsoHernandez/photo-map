import React, { Component } from 'react';
import Header from './header';
import Map from './Map';
/**
 *  Main component that renders all 
 *  components
 */
class App extends Component {
  render() {
    return (
      <div className="test">
        <Header />
        <Map />
      </div>
    );
  }
}

export default App;
