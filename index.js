/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks
- Create a state for markdown with the default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, and italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real-time 
*/

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const [markdown, setMarkdown] = useState('type markdown here');

  return (
    <div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}


// take a sentence as input
// reverse the input sentence
// the start of the sentence must start with a capital
// for javascript

function reverseSentence(sentence) {
  const reversed = sentence.split('').reverse().join('');
  return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}
