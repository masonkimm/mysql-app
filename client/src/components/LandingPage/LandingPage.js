import React from 'react';
import './LandingPage.css';
import video3 from './spinning-vinyl.mp4';

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <video autoPlay loop muted>
        <source src={video3} type='video/mp4' />
      </video>
      <div className='landingPage__overlay'></div>
      <div className='landingPage__title text'>
        <h2 className='landingPage__titleBig'>Snippet App</h2>
        <h4 className='landingPage__titleSmall'>
          MySQL - Express - React - Node
        </h4>
        {/* <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          maiores dignissimos consequuntur, quaerat placeat ab molestias
          blanditiis quae veniam, minus aliquid assumenda quia harum sit ex
          perferendis sint. Consequuntur, aut?
        </p> */}
        {/* <Link to='app__container' smooth={true} spy={true}>
          <button className='btn btn-secondary' href='#app__container'>
            get Started
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default LandingPage;
