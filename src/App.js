import './App.css';
import TextBox from './components/TextBox.js';
import NavBar from './components/NavBar.js';
import Alert from 'react-bootstrap/Alert';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
      </header>
      <Alert variant="secondary">
        Paste your code in the box below and click the button to download a PNG or SVG of your code.
        </Alert>
      <TextBox />
      
    </div>
  );
}

export default App;
