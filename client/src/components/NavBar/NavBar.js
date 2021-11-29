import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark  sticky-top p-5 ml-5 mr-5'>
      <Link to={'/'}>
        <h2 className='navbar-brand'>Snippet App</h2>
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon '></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item active'>
            <Link to={'/'}>
              <span className='nav-link'>
                Home <span className='sr-only'>(current)</span>
              </span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/snippet/create'}>
              <span className='nav-link'>Create New</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to={'/about'}>
              <span className='nav-link '>About</span>
            </Link>
          </li>
        </ul>
        {/* <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'>
              Search
            </button>
          </form> */}
      </div>
    </nav>
  );
};

export default NavBar;
