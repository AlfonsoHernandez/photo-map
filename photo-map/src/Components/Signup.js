import React, { Component } from 'react';
import './Login.css';
/**
 *  Signup component is the popup
 *  used for signing up.
 */
class Signup extends Component{
    render(){
        return (
      <div className='popup'>
        <div className='popup_inner'>
          <img onClick={this.props.closePopup} src="Icons/exit.png"/>
          <div className="body-title">Sign up</div>
          <input placeholder="Email Adress" type="text" name="email"/><br/><br/>
          <input placeholder="Confirm Email Adress" type="text" name="confirm_email"/><br/><br/>
          <input placeholder="Password" type="password" name="user"/><br/><br/>
          <input placeholder="Confirm Password" type="password" name="confirm_user"/><br/><br/>
          <button>Sign up</button><br/><br/>


        </div>
      </div>
    );
    }
}

export default Signup;
