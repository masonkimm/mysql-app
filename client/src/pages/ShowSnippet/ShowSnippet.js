import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './ShowSnippet.css';
import Highlight from 'react-highlight';

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
      window.location.replace('/');
      // window.location.replace(`/snippet/${path}`);
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
    <div className="showSnippet">
      {snippet &&
        snippet.map((snippet) => (
          <div className="showSnippet__item" key={snippet.id}>
            <div className="showSnippet__topRow">
              <div className="showSnippet__topRow__leftSide">
                <i
                  className={`devicon-${snippet.language}-plain  colored devicon`}
                />
                {updateMode ? (
                  <input
                    className="form-control"
                    defaultValue={snippet.title}
                    onChange={(e) => {
                      e.preventDefault();
                      setUpdatedTitle(e.target.value);
                    }}
                  />
                ) : (
                  <h1 className="showSnippet__topRow__leftSide__title">
                    {snippet.title}
                  </h1>
                )}
              </div>
              <div className="showSnippet__topRow__rightSide">
                {!updateMode && (
                  <i
                    className="editBtn far fa-edit"
                    onClick={() => setUpdateMode(true)}
                  ></i>
                )}
                <i
                  className="deleteBtn fas fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            </div>
            <div className="showSnippet__bottomRow">
              {updateMode ? (
                <div className="showSnippet__bottomRow__leftSide__update">
                  <div className="form-group">
                    <label htmlFor="">Select Language</label>
                    <select
                      className="form-control"
                      name=""
                      id="snippetLanguage"
                      defaultValue={snippet.language}
                      onChange={(e) => setUpdatedLanguage(e.target.value)}
                    >
                      <option value="">Select One</option>
                      <option value="html5">HTML 5</option>
                      <option value="javascript">JavaScript</option>
                      <option value="css3">CSS 3</option>
                      <option value="c">C</option>
                      <option value="csharp">C#</option>
                      <option value="cplusplus">C++</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="go">Go</option>
                      <option value="r">R</option>
                      <option value="swift">Swift</option>
                      <option value="php">PHP</option>
                      <option value="ruby">Ruby</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input
                      className="form-control"
                      defaultValue={snippet.description}
                      onChange={(e) => {
                        e.preventDefault();
                        setUpdatedDescription(e.target.value);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="showSnippet__bottomRow__leftSide__show">
                  <div className="showSnippet__bottomRow__leftSide__info">
                    <span>language:</span> <p>{snippet.language}</p>
                  </div>
                  <div className="showSnippet__bottomRow__leftSide__info">
                    <span>description:</span>
                    <p id="snippet__description"> {snippet.description}</p>
                  </div>
                  <div className="showSnippet__bottomRow__leftSide__info">
                    <span>created At:</span>
                    <p> {new Date(snippet.created_at).toDateString()}</p>
                  </div>
                </div>
              )}

              <div className="showSnippet__bottomRow__rightSide">
                {updateMode ? (
                  <div className="form-group">
                    <label htmlFor="">Snippet</label>
                    <textarea
                      cols="20"
                      rows="15"
                      className="form-control"
                      defaultValue={snippet.snippet}
                      onChange={(e) => {
                        e.preventDefault();
                        setUpdatedSnippet(e.target.value);
                      }}
                    ></textarea>
                  </div>
                ) : (
                  <div className="showSnippet__bottomRow__snippet">
                    <Highlight>{snippet.snippet}</Highlight>
                  </div>
                )}
              </div>
            </div>
            {updateMode && (
              <div className="showSnippet__buttons">
                <button
                  className="btn cancel__btn"
                  onClick={() => setUpdateMode(false)}
                >
                  Cancel{' '}
                </button>
                <button className="btn update__btn" onClick={handleUpdate}>
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
