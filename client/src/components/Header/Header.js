import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__title'>
        <h1 className='title__big'>Snippet App</h1>
        <p className='title__small'>MySQL - Express - React - Node</p>
      </div>
      <div className='header__img'>
        <img
          src='https://images.unsplash.com/photo-1602659408748-ecdc55ed7a50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
          alt='floppy disks'
        />
        {/* <img
          src='https://images.unsplash.com/photo-1618912487390-8987d3c3b862?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
          alt='floppy disks'
        /> */}
      </div>
    </div>
  );
};

export default Header;
