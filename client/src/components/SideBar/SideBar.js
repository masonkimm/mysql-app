import React, { useEffect, useState } from 'react';
import './SideBar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/main');
        await setSnippets(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const languages = snippets.map((snippet) => snippet.language);
  console.log(languages);
  const filteredLang = languages.filter(
    (item, index) => languages.indexOf(item) === index
  );
  console.log(filteredLang);

  return (
    <div className='sideBar'>
      <div className='sideBar__top'>
        <h4 className='sideBar__title'>Menu</h4>
        <div className='sideBar__menuItems'>
          <Link to={'/'} className='link'>
            <button className='btn'>View All</button>
          </Link>
          <Link to={'/snippet/create'} className='link'>
            <button className='btn'>Create New</button>
          </Link>
        </div>
      </div>
      <div className='sideBar__bottom'>
        <h4 className='sideBar__title'>Languages</h4>
        <div className='sideBar__items'>
          {filteredLang &&
            filteredLang.map((language) => (
              <Link
                to={`/?language=${language}`}
                key={language}
                className='link'>
                <div className='sideBar__item'>
                  <i className={`devicon-${language}-plain  colored`} />
                  <button className='btn'>{language}</button>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
