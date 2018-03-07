import React, { Component } from 'react';
import Header from './header';
import Map from './map'
/**
 *  Main component that renders all 
 *  components
 */
class App extends Component {
  render() {
    return (
      <div className="test">
        <Header />
        <Map text="Explore popular locations."/>
      </div>
    );
  }
}

export default App;
