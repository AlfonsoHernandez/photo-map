import React, { Component } from 'react';
import Map from './Map';
import './FrontContent.css';

class FrontContent extends Component {
    render() {
      console.log("Marker: " + this.props.markers)
        return (
            <div className="front-page-content">
                <div className="front-title">
                    Explore popular places near you
                </div>
                <Map mapMarkers={this.props.markers} />
            </div>
        );
    }
}

export default FrontContent;
