import React, { Component } from 'react';
import './TitleWindow.css';
import NavBar from './NavBar';

class TitleWindow extends Component {
    render() {
        return (
          <div className="title-window">
            <NavBar />
            <div className="header-large-text">
                Travel. Shoot. Share.
            </div>
            <div className="header-small-text">
                Discover your next adventure.
            </div>
            <div className="header-search-bar">
                <input id="header-search" type="text" placeholder="Try &quot;San Francisco&quot;" />
                <img src="Icons/search.png" className="search-icon" />
                <button>Search</button>
            </div>
          </div>
        );
    }
}

export default TitleWindow;
