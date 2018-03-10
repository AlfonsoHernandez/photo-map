import React, { Component } from 'react';
import FrontContent from './Components/FrontContent';
import TitleWindow from './Components/TitleWindow';
/**
 *  Main component that renders all
 *  components
 */
class App extends Component {
  constructor(){
    super();
    this.state = {
      mapMarkers: {},
      authUser:null,
    };
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
      },
      {
        name: 'Redwood Regional Park',
        lat: 37.8139,
        lng: -122.1661
      }
    ]});
  }

  render() {
    return (
      <div className="test">
        <TitleWindow authUser={this.state.authUser} />
        <FrontContent  markers={this.state.mapMarkers} />
      </div>
    );
  }
}

export default App;
