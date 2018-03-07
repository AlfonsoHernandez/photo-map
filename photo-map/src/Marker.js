import React, { Component } from 'react';
import './Marker.css';

class Marker extends Component {
    render() {
        return (
            <div><img src={require("./Assets/marker.png")} alt="Marker"/></div>
        );
    }
}

export default Marker;