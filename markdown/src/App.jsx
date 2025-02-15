import React, { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './App.css'; // External CSS

const App = () => {
  const [markdown, setMarkdown] = useState('# Hello, Markdown!');

  const resetMarkdown = () => {
    setMarkdown('# Hello, Markdown!');
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>📜 Markdown Previewer</h1>
        <p>Write Markdown on the left, see the preview on the right!</p>
        <button className="reset-button" onClick={resetMarkdown}>Reset</button>
      </header>

      <main className="content">
        <section className="editor-section">
          <h2>Markdown Editor</h2>
          <textarea
            id="editor"
            className="editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your markdown here..."
          />
        </section>

        <section className="preview-section">
          <h2>Preview</h2>
          <div id="preview" className="preview">
            <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;






















