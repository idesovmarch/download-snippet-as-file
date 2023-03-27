import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <div>
      <Navbar className="navStyle"style={{backgroundColor: '#161b22'}}>
          <Navbar.Brand href='#home'>
          <span className="title">
            <i
              className='fa-solid fa-lg fa-file-arrow-down fa-gradient'
              id="imageIcon"
             ></i>{' '}
           CodeSnippet</span>
          </Navbar.Brand>
      </Navbar>
    </div>
  );
}
