import React, { useEffect, useState } from 'react';
import './SideBar.css';
import axios from 'axios';
import Snippet from '../Snippet/Snippet';

const SideBar = () => {
  const [snippets, setSnippets] = useState([]);

  // const getSnippets = async () => {
  //   await axios.get('/main').then((response) => {
  //     const res = response.data;
  //     console.log(res);
  //     setSnippets(response.data);
  //   });
  // };
  // getSnippets();

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

  console.log(snippets);
  return (
    <div className='sideBar'>
      <div className='side__items'>
        {snippets &&
          snippets.map((snippet) => (
            <Snippet snippet={snippet} key={snippet.id} />
          ))}
      </div>
    </div>
  );
};

export default SideBar;
