import React from 'react';
import marked from 'marked';

const Preview = ({ markdown }) => {
  const getMarkdownText = () => {
    let rawMarkup = marked(markdown, { sanitize: true });
    return { __html: rawMarkup };
  }

  return (
    <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
  );
}

export default Preview;