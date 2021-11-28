import React, { useEffect, useState } from 'react';
import './SideBar.css';
import axios from 'axios';
import Snippet from '../Snippet/Snippet';

const SideBar = () => {
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
    <div className='sideBar'>
      <h4 className='sideBar__title'>Saved List</h4>
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
