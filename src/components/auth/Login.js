import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import userService from '../../utils/userService';

class LoginPage extends Component {
  state = {
    email: '',
    pw: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log('no go');
      await userService.login(this.state);
      console.log('go');
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  };

  render() {
    return (
      <div className='LoginPage'>
        <h1>
          Account <span className='text-primary'>Login</span>
        </h1>
        <form className='form-horizontal' onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input
                type='email'
                className='form-control'
                placeholder='Email'
                value={this.state.email}
                name='email'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12'>
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                value={this.state.pw}
                name='pw'
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-12 text-center'>
              <button className='btn btn-default'>Log In</button>
              &nbsp;&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
