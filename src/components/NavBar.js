import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (
    <div>
      <Navbar bg='dark' style={{backgroundColor: '#090b46'}}>
        <Container>
          <Navbar.Brand href='#home'>
            <i
              class='fa-solid fa-lg fa-file-image'
              style={{ color: '#ffffff', marginRight: '50px;' }}></i>{' '}
            <span className="title">CodeSnippet.png</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
