import React from 'react';
import './Snippet.css';
import { Link } from 'react-router-dom';

const Snippet = ({ snippet }) => {
  return (
    <div className='snippet'>
      <div className='card'>
        <i
          className={`devicon-${snippet.language}-plain  colored card-img-top`}
        />
        <div className='card-body'>
          <Link to={`/snippet/${snippet.id}`} className='link'>
            <h2 className='card-title'>{snippet.title}</h2>
          </Link>
          <p className='card-text'>{snippet.description}</p>
          <p className='card-text snippet__date'>
            {new Date(snippet.created_at).toDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Snippet;

/* <span className='snippet__item btn'>
        <Link to={`/snippet/${snippet.id}`} className='link'>
          {snippet.title}
        </Link>
      </span> */

/* <span  className='snippet__item btn'>
        <i className={`devicon-${snippet.language}-plain  colored`} />{' '}
        <Link to={`/snippet/${snippet.id}`} className='link'>
          {snippet.title}
        </Link>
      </span> */
