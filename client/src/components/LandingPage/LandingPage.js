import React from 'react';
import './LandingPage.css';
import video from './video2.mp4';
import { Link } from 'react-scroll';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <video autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <div className='overlay'></div>
      <div className='landingPage__title text'>
        <h2 className='title__big'>Snippet App</h2>
        <h3 className='title__small'>MySQL - Express - React - Node</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          maiores dignissimos consequuntur, quaerat placeat ab molestias
          blanditiis quae veniam, minus aliquid assumenda quia harum sit ex
          perferendis sint. Consequuntur, aut?
        </p>
        <Link to='app__container' smooth={true} spy={true}>
          <button className='btn btn-secondary' href='#app__container'>
            get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
