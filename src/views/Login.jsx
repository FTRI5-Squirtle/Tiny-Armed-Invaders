// import { render } from '@testing-library/react';
import React, { Component }  from 'react';
// import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      errorEm: false,
      errorPw: false
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: ''})
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name] : value })
  }

  // handle get request for login --> fetch to server

  // handle error pop ups --> errorState
  /*
  <div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div>*/

  render(){
    return (
      <div className='logIn'> 
        <h3>I've faced the Tiny Arms before.</h3>
        <span>Sign in with your email and password.</span>
        <form onSubmit={this.handleSubmit} >
          <label>Email</label>
          <input 
            name='email' 
            type='email' 
            value={this.state.email} 
            onChange={this.handleChange} 
            required  
          />

          <label>Password</label>
          <input 
            name='password' 
            type='password' 
            value={this.state.password} 
            onChange={this.handleChange} 
            required
          />

          <input 
            type='submit' 
            value='Log thyself in'
          />
        </form>
      </div>
    )
  }
}


export default Login;
