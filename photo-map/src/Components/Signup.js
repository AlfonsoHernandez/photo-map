import React, { Component } from 'react';
import './Login.css';
/**
 *  Signup component is the popup
 *  used for signing up.
 */

 const byPropKey = (name, value) => () => ({
   [name]: value,
 });

class Signup extends Component{
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

        const isInvalid =
          email !== confirmEmail ||
          password !== confirmPassword ||
          password === '' ||
          email === '' ||
          username === '';

        return (
          <div className='popup'>
            <div className='popup_inner'>
              <img onClick={this.props.closePopup} src="Icons/exit.png"/>
              <div className="body-title">Sign up</div>
          <form onSubmit={this.onSubmit}>
            <input
              value={username}
              placeholder="Username"
              type="text"
              onChange={event => this.setState(byPropKey('username', event.target.value))}
            /><br/><br/>

            <input
              value={email}
              placeholder="Email Adress"
              type="text"
              onChange={event => this.setState(byPropKey('email', event.target.value))}
            /><br/><br/>

            <input
              value={confirmEmail}
              placeholder="Confirm Email Adress"
              type="text"
              onChange={event => this.setState(byPropKey('confirmEmail', event.target.value))}
            /><br/><br/>

            <input
              value={password}
              placeholder="Password"
              type="password"
              onChange={event => this.setState(byPropKey('password', event.target.value))}
            /><br/><br/>

          <input
            value={confirmPassword}
            placeholder="Confirm Password"
            type="password"
            onChange={event => this.setState(byPropKey('confirmPassword', event.target.value))}
          /><br/><br/>

          {error && <p>{error.message}</p> }

          <button disabled={isInvalid} type="submit"> Sign p </button><br/><br/>
          </form>

        </div>
      </div>
    );
    }
}

export default Signup;
