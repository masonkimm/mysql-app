import React from 'react';
import './LandingPage.css';
import video from './spinning-vinyl.mp4';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <video autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <div className='landingPage__overlay'></div>
      <div className='landingPage__title'>
        <h2 className='landingPage__titleBig'>Snippet App</h2>
        <h4 className='landingPage__titleSmall'>
          MySQL - Express - React - Node
        </h4>
      </div>
    </div>
  );
};

export default LandingPage;
