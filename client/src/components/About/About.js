import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className='about'>
      <h1>About the this app</h1>
      <Link to={'/snippet/create'}>
        <button>Create New</button>
      </Link>
    </div>
  );
};

export default About;
