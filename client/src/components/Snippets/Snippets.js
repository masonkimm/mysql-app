import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
// import { Link } from 'react-router-dom';
import Snippet from '../Snippet/Snippet';
import './Snippets.css';

const Snippets = () => {
  const [snippets, setSnippets] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/main${search}`);
        // console.log(res.data);
        await setSnippets(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [search]);

  return (
    <div className='snippets'>
      {snippets &&
        snippets.map((snippet) => (
          <Snippet snippet={snippet} key={snippet.id} />
        ))}
    </div>
  );
};

export default Snippets;
