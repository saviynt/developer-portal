// src/components/LiveEditor.js
import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const LiveEditorComponent = ({ code, scope }) => {
  const [output, setOutput] = useState('');

  const runCode = async () => {
    try {
      const response = await axios.post('/api/openai', { prompt: code });
      setOutput(response.data.choices[0].text);
    } catch (error) {
      setOutput('Error: ' + error.message);
    }
  };

  return (
    <LiveProvider code={code}>
      <LiveEditor onChange={runCode} />
      <LivePreview />
      <div>{output}</div>
      <LiveError />
    </LiveProvider>
  );
};

export default LiveEditorComponent;
