import React, { Component } from 'react';
import Map from './Map';
import './FrontContent.css';

class FrontContent extends Component {    
    render() {
        return (
            <div className="front-page-content">
                <div className="front-title">
                    Explore popular places near you
                </div>
                <Map />
            </div>
        );
    }
}

export default FrontContent;