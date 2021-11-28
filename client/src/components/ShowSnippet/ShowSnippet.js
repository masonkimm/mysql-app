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
            <p>snippet id:{snippet.id}</p>
            <p>title: {snippet.title}</p>
            <p>language: {snippet.language}</p>

            <p>description: {snippet.description}</p>
            <p>snippet: {snippet.snippet}</p>
          </div>
        ))}
    </div>
  );
};

export default ShowSnippet;
