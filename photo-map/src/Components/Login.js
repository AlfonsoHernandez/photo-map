import React, { Component } from 'react';
import './Login.css';
/**
 *  Login component is the popup
 *  used for signing in.
 */
const byPropKey = (name, value) => () => ({
  [name]: value,
});

class Login extends Component{
    constructor(){
      super();
      this.state = {
        username: '',
        email: '',
        confirmEmail: '',
        password: '',
        confirmPassword: '',
        error: null,
      }
    }

    onSubmit = (event) => {

    }

    render(){
        return (
      <div className='popup'>
        <div className='popup_inner'>
          <img onClick={this.props.closePopup} src="Icons/exit.png"/>
          <div className="body-title">Log in to continue</div>
          <form onSubmit={this.onSubmit}>

            <input
              placeholder="Email Adress"
              type="text" name="user"
            />
            <br/><br/>
            <input
              placeholder="Password"
              type="password"
              name="user"
            />
            <br/><br/>
            <button>
              Log in
            </button>
            <br/><br/>
          </form>
          <a className="forgot" href="#">Forgot password?</a><br/><br/>
          <button id="oauth">Google<img id="google" src="Icons/google"/></button>
          <button id="oauth">Facebook<img id="fb" src="Icons/facebook"/></button>
        </div>
      </div>
    );
    }
}

export default Login;
