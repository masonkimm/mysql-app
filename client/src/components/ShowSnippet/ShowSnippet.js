import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './ShowSnippet.css';

const ShowSnippet = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  // console.log(path);

  const [snippet, setSnippet] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/snippet/${path}`);
        // console.log(res.data);
        await setSnippet(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [path]);
  // console.log(snippet);

  return (
    <div className='showSnippet'>
      {snippet &&
        snippet.map((snippet) => (
          <div className='showSnippet__item' key={snippet.id}>
            <div className='item__topRow'>
              <h1>
                {' '}
                <i
                  class={`devicon-${snippet.language}-plain  colored devicon`}
                />
                {snippet.title}
              </h1>
              <div className='topRow__rightSide'>
                <i class='far fa-edit editBtn'></i>
                <i class='fas fa-trash-alt deleteBtn'></i>
              </div>
            </div>
            <div className='item__bottomRow'>
              <div className='item__left'>
                <p>snippet id:{snippet.id}</p>
                <p>language: {snippet.language}</p>
                <p>description: {snippet.description}</p>
              </div>
              <div className='item__right'>
                <p>snippet: {snippet.snippet}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShowSnippet;
