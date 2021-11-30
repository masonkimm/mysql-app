import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <div className='aboutPage__container container'>
        <h1 className='aboutPage__title'>About This App</h1>
        <div className='aboutPage__body'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, autem voluptate! Nulla obcaecati nobis odio quaerat
            aliquid sequi vero at laboriosam veniam eius voluptatem labore
            recusandae, consectetur minus rem maiores!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
