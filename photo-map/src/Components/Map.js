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
          let markers;
          if(this.props.mapMarkers){
            markers = this.props.mapMarkers.map(marker => {
              return(
                <Marker lat={marker.lat} lng={marker.lng} />
              );
            });
          }


        return (
            <div className="map-container">
                <GoogleMapReact
                id="map"
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
              {markers}
            </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
