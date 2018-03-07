import React, { Component } from 'react';
import Header from './header';
import FrontContent from './FrontContent';
/**
 *  Main component that renders all 
 *  components
 */
class App extends Component {
  render() {
    return (
      <div className="test">
        <Header />
        <FrontContent />
      </div>
    );
  }
}

export default App;
