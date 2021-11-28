import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
// import { Link } from 'react-router-dom';
import './ShowSnippet.css';
import Highlight from 'react-highlight';
import '../../../node_modules/highlight.js/styles/stackoverflow-dark.css';

const ShowSnippet = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2];

  const [snippet, setSnippet] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('');
  const [snippetBody, setSnippetBody] = useState('');

  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedLanguage, setUpdatedLanguage] = useState('');
  const [updatedSnippet, setUpdatedSnippet] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/snippet/${path}`);
        // console.log(res.data);
        await setSnippet(res.data);
        console.log(res.data[0]);
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
    } catch (err) {}
  };

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
                  <h1>{snippet.title}</h1>
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
                <div className='item__left'>
                  {/* <input
                    // placeholder={snippet.language}
                    defaultValue={snippet.language}
                    onChange={(e) => {
                      e.preventDefault();
                      setUpdatedLanguage(e.target.value);
                    }}
                  /> */}
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
                <div className='item__left'>
                  <p>snippet id:{snippet.id}</p>
                  <p>language: {snippet.language}</p>
                  <p>description: {snippet.description}</p>
                </div>
              )}

              <div className='item__right'>
                {updateMode ? (
                  <div className='form-group'>
                    <label htmlFor=''>Snippet</label>
                    <textarea
                      cols='30'
                      rows='17'
                      className='form-control'
                      defaultValue={snippet.snippet}
                      onChange={(e) => {
                        e.preventDefault();
                        setUpdatedSnippet(e.target.value);
                      }}></textarea>
                  </div>
                ) : (
                  <Highlight>snippet: {snippet.snippet}</Highlight>
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
