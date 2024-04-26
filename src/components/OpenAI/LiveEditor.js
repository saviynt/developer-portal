// src/components/LiveEditor.js
import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const LiveEditorComponent = ({ code, scope }) => {
  return (
    <LiveProvider code={code} scope={scope}>
      <LiveEditor />
      <LivePreview />
      <LiveError />
    </LiveProvider>
  );
};

export default LiveEditorComponent;
