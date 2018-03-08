import React, { Component } from 'react';
import Header from './header';
import FrontContent from './FrontContent';
/**
 *  Main component that renders all
 *  components
 */
class App extends Component {
  constructor(){
    super();
    this.state = {
      mapMarkers: {}
    }
  }

  componentWillMount(){
    this.setState({mapMarkers: [
      {
        name: 'Golden Gate Bridge',
        lat: 37.8199,
        lng: -122.4783
      },
      {
        name: 'Fort Funston',
        lat: 37.7195,
        lng: -122.5028
      }
    ]});
  }

  render() {
    return (
      <div className="test">
        <Header />
        <FrontContent  markers={this.state.mapMarkers} />
      </div>
    );
  }
}

export default App;
