import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../logo.svg';

const NavBar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg navbar-dark  sticky-top p-4 mr-5 ml-2 '
      id='navBar'>
      <img src={logo} className='nav__logo' alt='logo' />

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul
          className='navbar-nav ml-auto pull-right dropdown-menu-right'
          style={{ right: '0', left: 'auto' }}>
          <li className='nav-item active'>
            <Link to={'/'} className='link'>
              <span className='nav-link'>
                Home <span className='sr-only'>(current)</span>
              </span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/snippet/create'} className='link'>
              <span className='nav-link'>Create New</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/about'} className='link'>
              <span className='nav-link '>About</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
