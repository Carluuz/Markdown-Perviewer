// src/components/Preview.js
import React from 'react';
import * as marked from 'marked';

class Preview extends React.Component {
  getMarkdownText() {
    var rawMarkup = marked(this.props.markdown, {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()} />
    );
  }
}

export default Preview;