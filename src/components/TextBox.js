import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toPng, toSvg } from 'html-to-image';
import download from 'downloadjs';

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
      <Card
        style={{
          width: '600px',
          height: '600px',
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: '300px',
          backgroundColor: 'black',
        }}>
        <Card.Header style={{ color: 'white', backgroundColor: '#222324' }}>
          Code Editor
        </Card.Header>
        <Card.Body>
          <div data-color-mode='dark'>
            <CodeEditor
              value={code}
              language='js'
              placeholder='Please enter JS code'
              onChange={(evn) => setCode(evn.target.value)}
              padding={15}
              style={{
                fontSize: 12,
                backgroundColor: 'black',
                fontFamily:
                  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                width: 'auto',
                height: 'auto',
              }}
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
