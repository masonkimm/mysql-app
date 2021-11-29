import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
// import { Link } from 'react-router-dom';
import Snippet from '../Snippet/Snippet';
import './Snippets.css';

const Snippets = () => {
  const [snippets, setSnippets] = useState([]);
  const [snippetsByLang, setSnippetsByLang] = useState([]);
  const { search } = useLocation();

  console.log('search', search);

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
  console.log(snippets);

  // useEffect(() => {
  //   const fetchSnippets = async () => {
  //     const res = await axios.get(`/snippets${search}`);
  //     console.log(res.data);
  //     setSnippetsByLang(res.data);
  //   };
  //   fetchSnippets();
  // }, [search]);

  console.log(snippetsByLang);
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
