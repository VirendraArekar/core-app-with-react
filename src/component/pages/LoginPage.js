import React, { Component } from 'react';
import LoginForm from '../Forms/LoginForm';
import '../css/LoginPage.css';

class LoginPage extends Component {

  submit = data => {
    console.log(data);
  }
  
  render(){
    return(
      <div className="main">
         <h1>Login Page</h1>
         <LoginForm  submit={this.submit}/>
      </div>
    )
  }
}

export default LoginPage;
