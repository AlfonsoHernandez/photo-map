import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';

class Map extends Component {
    static defaultProps = {
        center: {lat:37.765883, lng:-122.478245},
        zoom: 11
    };
    
    render() {
        return (
            <div className="map-container">
                <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            />
            </div>
        );
    }
}

export default Map;