import React, { Component } from 'react';
import './map.css';
//import './Login.css';
/**
 *  Login component is the popup
 *  used for signing in.
 */
class Map extends Component{
    constructor(props){
        super(props);
        //document.write("<script async defer src='" + mapSrc + "'>" + "<" + "/script>");
        this.state = {
            text:"Say something here"
        }
    }
    

    
    render(){
        return (
            <div className="content">
                <div class="body-title">{this.props.text}</div>
                <div class="map-container">
                    <div id="map"></div>
                </div>
            </div>
    );
    }
}

export default Map;