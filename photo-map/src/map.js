import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';
import Marker from './Marker'

class Map extends Component {
    static defaultProps = {
        center: {lat:37.765883, lng:-122.478245},
        zoom: 11
    };
    
    render() {
        return (
            <div className="map-container">
                <GoogleMapReact
                id="map"
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <Marker
                    lat={37.8199}
                    lng={-122.4783}
                />
            </GoogleMapReact>
            </div>
        );
    }
}

export default Map;