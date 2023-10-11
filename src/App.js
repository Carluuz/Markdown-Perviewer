// src/App.js
import React from 'react';
import Editor from './components/editor.js';
import Preview from './components/preview.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ markdown: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        <Preview markdown={this.state.markdown} />
      </div>
    );
  }
}

export default App;