import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navBar'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to={'/'}>
          <span className='navbar-brand'>Snippet App</span>
        </Link>
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
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link to={'/'}>
                <span className='nav-link'>
                  Home <span className='sr-only'>(current)</span>
                </span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/snippet/create'}>
                <span className='nav-link' href='#createNew'>
                  Create New
                </span>
              </Link>
            </li>

            <li className='nav-item'>
              <Link to={'/about'}>
                <span className='nav-link '>About</span>
              </Link>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
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
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
