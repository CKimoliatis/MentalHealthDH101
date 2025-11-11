import React from 'react';
import '../Pages.css';

const LiteraturePage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Literature Review</h1>
        <p className="text-content">Add synthesized findings from key studies here, connecting them to our research questions and data choices.</p>
        <div className="next-section">
          <a className="next-link" href="#/narrative/presenting">Next section → Presenting our work</a>
        </div>
      </section>
    </main>
  );
};

export default LiteraturePage;
