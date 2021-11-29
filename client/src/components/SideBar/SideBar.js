import React, { useEffect, useState } from 'react';
import './SideBar.css';
import axios from 'axios';
import Snippet from '../Snippet/Snippet';
import { Link } from 'react-router-dom';

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
      <div className='sideBar__top'>
        <h4 className='sideBar__title'>Menu</h4>
        <div className='sideBar__menuItems'>
          <Link to={'/'}>
            <button className='btn btn-secondary'>View All</button>
          </Link>
          <Link to={'/snippet/create'}>
            <button className='btn btn-secondary'>Create New</button>
          </Link>
        </div>
      </div>
      <div className='sideBar__bottom'>
        <h4 className='sideBar__title'>Languages</h4>
        <div className='side__items'>
          {/* {snippets &&
            snippets.map((snippet) => (
              <Snippet snippet={snippet} key={snippet.id} />
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
