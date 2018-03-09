import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import './navbar.css';

class NavBar extends Component{
    constructor(){
        super();
        this.state = {
            showLogin: false,
            showSignup: false
        };
    }

    toggleLogin() {
        this.setState({
            showLogin: !this.state.showLogin
        });
    }

    toggleSignup() {
        this.setState({
            showSignup: !this.state.showSignup
        });
    }

    render() {
        return (
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                    <div className="head-title">PhotoMap</div>
                </div>
            </div>
            <div className="nav-container">
                <div className="nav">
                    <button onClick={this.toggleLogin.bind(this)}>Log In</button>
                    <button onClick={this.toggleSignup.bind(this)}>Sign Up</button>
                </div>
            </div>
            {this.state.showLogin ?
                <Login
                text='Close Me'
                closePopup={this.toggleLogin.bind(this)}
          />
          : null
        }
            {this.state.showSignup ?
                <Signup
                text='Close Me'
                closePopup={this.toggleSignup.bind(this)}
          />
          : null
        }
        </div>
      );
    }

}

export default NavBar;
