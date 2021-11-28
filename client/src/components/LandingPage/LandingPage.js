import React from 'react';
import './LandingPage.css';
import video from './video.mp4';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <video autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      {/* <h1>Save your snippets</h1> */}
    </div>
  );
};

export default LandingPage;
