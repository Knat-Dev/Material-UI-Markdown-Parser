import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ language, value }) => {
  return value ? (
    <SyntaxHighlighter language={language ?? 'jsx'} style={materialDark}>
      {value}
    </SyntaxHighlighter>
  ) : null;
};

export default CodeBlock;
