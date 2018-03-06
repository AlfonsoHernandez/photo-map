import React, { Component } from 'react';
import './Login.css';

class Login extends Component{
    render(){
        return (
      <div className='popup'>
        <div className='popup_inner'>
          <img onClick={this.props.closePopup} src="Icons/exit.png"/>
          <div className="body-title">Log in to continue</div>
          <input placeholder="Email Adress" type="text" name="user"/><br/><br/>
          <input placeholder="Password" type="password" name="user"/><br/><br/>
          <button>Log in</button><br/><br/>
          <a className="forgot" href="#">Forgot password?</a><br/><br/>
          <button id="oauth">Google<img id="google" src="Icons/google"/></button>
          <button id="oauth">Facebook<img id="fb" src="Icons/facebook"/></button>
        </div>
      </div>
    );
    }
}

export default Login;