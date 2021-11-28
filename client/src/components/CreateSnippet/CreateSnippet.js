import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './CreateSnippet.css';

const CreateSnippet = () => {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [description, setDescription] = useState('');
  const [snippet, setSnippet] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSnippetData = {
      title,
      language,
      description,
      snippet,
    };
    try {
      const res = await axios.post('/snippet/create', newSnippetData);
      console.log(res.data.insertId);
      const id = res.data.insertId;
      window.location.replace('/snippet/' + id);
    } catch (err) {}
  };

  return (
    <div className='createSnippet'>
      <div className='container createSnippet__container'>
        <form action='' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor=''>Title</label>
            <input
              type='text'
              className='form-control'
              placeholder='title'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Language</label>
            <input
              type='text'
              className='form-control'
              placeholder='language'
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label htmlFor=''>Description</label>
            <input
              type='text'
              className='form-control'
              placeholder='description'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <label htmlFor=''>Snippet</label>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              placeholder='snippet here'
              className='form-control'
              onChange={(e) => setSnippet(e.target.value)}></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSnippet;
