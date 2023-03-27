import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toPng, toSvg } from 'html-to-image';
import download from 'downloadjs';
import '../App.css';

export default function TextBox() {
  const handleDownloadPng = () => {
    toPng(document.getElementById('code-editor')).then(function (dataUrl) {
      download(dataUrl, 'my-node.png');
    });
  };

  function filter(node) {
    return node.tagName !== 'i';
  }
  const handleDownloadSvg = () => {
    toSvg(document.getElementById('code-editor'), { filter }).then(function (dataUrl) {
      download(dataUrl, 'my-node.svg');
    });
  };
  const [code, setCode] = React.useState(`function add(a, b) {\n return a + b;\n}`);
  return (
    <div id='code-editor'>
      <Card className='cardStyle'>
        <Card.Header className='cardHeader' style={{ color: 'white', backgroundColor: '#222324' }}>
          <b>Code Editor</b>
        </Card.Header>
        <Card.Body>
          <div data-color-mode='dark'>
            <CodeEditor
              className='codeEditor'
              value={code}
              language='js'
              placeholder='Please enter JS code'
              onChange={(evn) => setCode(evn.target.value)}
              padding={15}
            />
          </div>
        </Card.Body>
      </Card>
      <div className='button-container'>
        <Button className='buttons' variant='warning' onClick={handleDownloadPng}>
          Save PNG
        </Button>
        <Button className='buttons' variant='warning' onClick={handleDownloadSvg}>
          Save SVG
        </Button>
      </div>
    </div>
  );
}
