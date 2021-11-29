import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
// import { Link } from 'react-router-dom';
import './ShowSnippet.css';
import Highlight from 'react-highlight';
// import '../../../node_modules/highlight.js/styles/stackoverflow-light.css';
import './agate.css';

const ShowSnippet = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [snippet, setSnippet] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);

  // states for snippets
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [snippetBody, setSnippetBody] = useState('');

  // states for updated snippets
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedLanguage, setUpdatedLanguage] = useState('');
  const [updatedSnippet, setUpdatedSnippet] = useState('');

  // to fetch snippet data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/snippet/${path}`);
        await setSnippet(res.data);
        setTitle(res.data[0].title);
        setLanguage(res.data[0].language);
        setDescription(res.data[0].description);
        setSnippetBody(res.data[0].snippet);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    setUpdateMode(false);
  }, [path]);

  // to update snippets
  const handleUpdate = async () => {
    try {
      await axios.put(`/snippet/update`, {
        id: path,
        title: updatedTitle || title,
        language: updatedLanguage || language,
        description: updatedDescription || description,
        snippet: updatedSnippet || snippetBody,
      });
      window.location.replace(`/snippet/${path}`);
    } catch (err) {
      console.log(err);
    }
  };
  // to delete snippets
  const handleDelete = async () => {
    try {
      await axios.delete(`/delete/${path}`);
      window.location.replace('/');
    } catch (err) {}
  };

  return (
    <div className='showSnippet'>
      {snippet &&
        snippet.map((snippet) => (
          <div className='showSnippet__item' key={snippet.id}>
            <div className='item__topRow'>
              <div className='topRow__leftSide'>
                <i
                  className={`devicon-${snippet.language}-plain  colored devicon`}
                />{' '}
                {updateMode ? (
                  <input
                    className='form-control'
                    defaultValue={snippet.title}
                    onChange={(e) => {
                      e.preventDefault();
                      setUpdatedTitle(e.target.value);
                    }}
                  />
                ) : (
                  <h1 className='showSnippet__title'>{snippet.title}</h1>
                )}
              </div>
              <div className='topRow__rightSide'>
                <i
                  className='far fa-edit editBtn'
                  onClick={() => setUpdateMode(true)}></i>
                <i
                  className='fas fa-trash-alt deleteBtn'
                  onClick={handleDelete}></i>
              </div>
            </div>
            <div className='item__bottomRow'>
              {updateMode ? (
                <div className='showSnippet__itemsLeft'>
                  <div className='form-group'>
                    <label htmlFor=''>Select Language</label>
                    <select
                      className='form-control'
                      name=''
                      id='snippetLanguage'
                      defaultValue={snippet.language}
                      onChange={(e) => setUpdatedLanguage(e.target.value)}>
                      <option value=''>Select One</option>
                      <option value='html5'>HTML 5</option>
                      <option value='javascript'>JavaScript</option>
                      <option value='css3'>CSS 3</option>
                      <option value='c'>C</option>
                      <option value='csharp'>C#</option>
                      <option value='cplusplus'>C++</option>
                      <option value='python'>Python</option>
                      <option value='java'>Java</option>
                      <option value='go'>Go</option>
                      <option value='r'>R</option>
                      <option value='swift'>Swift</option>
                      <option value='php'>PHP</option>
                      <option value='ruby'>Ruby</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor=''>Description</label>
                    <input
                      className='form-control'
                      defaultValue={snippet.description}
                      onChange={(e) => {
                        e.preventDefault();
                        setUpdatedDescription(e.target.value);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className='showSnippet__itemsLeft'>
                  {/* <div className='itemsLeft__info'>
                    <span> snippet ID:</span> <h4>{snippet.id}</h4>
                  </div> */}
                  <div className='itemsLeft__info'>
                    <span>Language:</span> <h4>{snippet.language}</h4>
                  </div>
                  <div className='itemsLeft__info'>
                    <span>Description:</span>
                    <p> {snippet.description}</p>
                  </div>
                  <div className='itemsLeft__info'>
                    <span>Created At:</span>
                    <p> {new Date(snippet.created_at).toDateString()}</p>
                  </div>
                </div>
              )}

              <div className='showSnippet__itemsRight'>
                {updateMode ? (
                  <div className='form-group'>
                    <label htmlFor=''>Snippet</label>
                    <textarea
                      cols='20'
                      rows='11'
                      className='form-control'
                      defaultValue={snippet.snippet}
                      onChange={(e) => {
                        e.preventDefault();
                        setUpdatedSnippet(e.target.value);
                      }}></textarea>
                  </div>
                ) : (
                  <div className='itemsRight__info'>
                    <Highlight>{snippet.snippet}</Highlight>
                  </div>
                )}
              </div>
            </div>
            {updateMode && (
              <div className='showSnippet__updateButtons'>
                <button
                  className='btn btn-secondary cancel__btn'
                  onClick={() => setUpdateMode(false)}>
                  Cancel{' '}
                </button>
                <button className='btn btn-primary' onClick={handleUpdate}>
                  Submit{' '}
                </button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default ShowSnippet;
