import React from 'react';
import './Snippet.css';
import { Link } from 'react-router-dom';

const Snippet = ({ snippet }) => {
  return (
    <div className='snippet'>
      <span key={snippet.id} className='snippet__item btn'>
        <i class={`devicon-${snippet.language}-plain  colored`} />{' '}
        <Link to={`/snippet/${snippet.id}`} className='link'>
          {snippet.title}
        </Link>
      </span>
    </div>
  );
};

export default Snippet;
