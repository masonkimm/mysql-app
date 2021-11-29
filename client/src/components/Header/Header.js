import React from 'react';
import './Header.css';
import video from './video2.mp4';

const Header = () => {
  return (
    <div className='header showcase'>
      <video autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <div className='overlay'></div>
      <div className='header__title text'>
        <h2 className='title__big'>Snippet App</h2>
        <h3 className='title__small'>MySQL - Express - React - Node</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          maiores dignissimos consequuntur, quaerat placeat ab molestias
          blanditiis quae veniam, minus aliquid assumenda quia harum sit ex
          perferendis sint. Consequuntur, aut?
        </p>
        <button className='btn btn-secondary'>get Started</button>
      </div>
    </div>
  );
};

export default Header;
