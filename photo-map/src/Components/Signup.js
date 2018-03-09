import React, { Component } from 'react';
import './Login.css';
import { auth } from '../firebase';
/**
 *  Signup component is the popup
 *  used for signing up.
 */

 const byPropKey = (name, value) => () => ({
   [name]: value,
 });

 const INITIAL_STATE = {
  username: '',
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
  error: null,
};

class Signup extends Component{
    constructor(){
      super();
      this.state = { ...INITIAL_STATE};

    }

    onSubmit = (event) => {

      const {
        username,
        email,
        password,
      } = this.state;

      auth.doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
          this.props.closePopup();
          this.setState(() => ({ ...INITIAL_STATE }));

        })
        .catch(error => {
          alert(error);
          this.setState(byPropKey('error', error));
        });
      event.preventDefault();
    }

    
    render(){
        const {
          username,
          email,
          confirmEmail,
          password,
          confirmPassword,
          error,
        } = this.state;
        const isInvalid =
          email !== confirmEmail ||
          password !== confirmPassword ||
          password === '' ||
          email === '' ||
          username === '';

        return (
          <div className='popup'>
            <div className='popup_inner'>
              <img onClick={this.props.closePopup} src="Icons/exit.png" alt="exit"/>
              <div className="body-title">Sign up</div>

              <form onSubmit={this.onSubmit} >

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

                <button disabled={isInvalid} type="submit"> Sign up </button><br/><br/>

            </form>
        </div>
      </div>
    );
    }
}

export default Signup;
