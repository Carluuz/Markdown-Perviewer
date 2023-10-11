import React, { useState } from 'react';
import Editor from './components/editor';
import Preview from './components/preview'; 
import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState("# Welcome to my React Markdown Previewer!");

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  }

  return (
    <div className="App">
      <Editor markdown={markdown} onChange={handleChange} />
      <Preview markdown={markdown} />
    </div>
  );
}

export default App;