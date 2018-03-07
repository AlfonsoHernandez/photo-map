import React, { Component } from 'react';
import Login from './Login';
import './header.css';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            showLogin: false
        };
    }
    
    toggleLogin() {
        this.setState({
            showLogin: !this.state.showLogin
        });
    }
    
    render() {
        return (
        <div className="header">
            <div className="logo-container">
                <div class="logo">
                    <div class="head-title">PhotoMap</div>
                </div>
            </div>
            <div className="nav-container">
                <div className="nav">
                    <button onClick={this.toggleLogin.bind(this)}>Log In</button>
                    <button>Sign Up</button>
                </div>
            </div>
            <div className="header-large-text">
                Travel. Shoot. Share.
            </div>
            <div className="header-small-text">
                Discover your next adventure.
            </div>
            <div className="header-search-bar">
                <input id="header-search" type="text" placeholder="Try &quot;San Francisco&quot;" />
                <img src="Icons/search.png" className="search-icon" />
                <button onclick="alert('search')">Search</button>
            </div>
            {this.state.showLogin ? 
                <Login
                text='Close Me'
                closePopup={this.toggleLogin.bind(this)}
          />
          : null
        }
        </div>
        )
    }
}

export default Header;