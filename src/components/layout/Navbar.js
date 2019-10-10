import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  let nav = props.user ? (
    <div>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/login' onClick={props.handleLogout}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  ) : (
    <div>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </div>
  );
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className='fas fa-dice-d20' /> Character Creator
        {nav}
      </h1>
    </div>
  );
};

export default Navbar;
