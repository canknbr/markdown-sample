import React from 'react';
import ReactMarkdown from 'react-markdown';
const App = () => {
  const [markdown, setMarkdown] = React.useState('## Hello World');
  return (
    <main>
      <section className="markdown">
        <textarea
          value={markdown}
          onChange={e => setMarkdown(e.target.value)}
          className="input"
        ></textarea>
      </section>
      <article className="result">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </main>
  );
};

export default App;
