import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Snippet from '../Snippet/Snippet';
import './About.css';

const About = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/main');
        // console.log(res.data);
        await setSnippets(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='about'>
      {snippets &&
        snippets.map((snippet) => (
          <Snippet snippet={snippet} key={snippet.id} />
        ))}
    </div>
  );
};

export default About;
