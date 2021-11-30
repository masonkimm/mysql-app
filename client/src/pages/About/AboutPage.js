import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='aboutPage'>
      <div className='aboutPage__container container'>
        <h1 className='aboutPage__title'>About This App</h1>
        <div className='aboutPage__body'>
          <div className='aboutPage__bodyTop'>
            <p>
              Save, share, and use your code snippets. View your code snippets
              with colored sytanx.
            </p>
          </div>
          <div className='aboutPage__bodyBottom'>
            <div className='aboutPage__bodyBottomLeft'>
              <span>
                <i class='fas fa-save'></i> Save
              </span>

              <span>
                <i class='fas fa-code'></i> View with colored syntax
              </span>
            </div>
            <div className='aboutPage__bodyBottomRight'>
              <span>
                <i class='fas fa-share'></i> Share
              </span>
              <span>
                <i class='fas fa-language'></i> Save snippet by language
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
