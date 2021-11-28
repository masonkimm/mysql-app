import React from 'react';
import './Snippet.css';
import { Link } from 'react-router-dom';

const Snippet = ({ snippet }) => {
  return (
    <div className='snippet'>
      <span key={snippet.id} className='btn btn-primary'>
        <Link to={`/snippet/${snippet.id}`} className='link'>
          {snippet.title}
        </Link>
      </span>
    </div>
  );
};

export default Snippet;
