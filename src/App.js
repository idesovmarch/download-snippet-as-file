import './App.css';
import TextBox from './components/TextBox.js';
import NavBar from './components/NavBar.js';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
      </header>

      <Card className='infoCard'>
        <Card.Body>
          Paste your JavaScript in the box below and click the button to download a PNG or SVG of
          the box below Useful for tutorials and documentation
        </Card.Body>
      </Card>

      <TextBox />
      <footer className='footerBar'>
        Brad Hammer "Idesovmarch" 2023{' '}
        <a href='https://www.flaticon.com/free-icons/save' title='save icon favicon'>
          Save icon used as favicon designed by designhub - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default App;
