import React from 'react';
import '../Pages.css';

const NarrativePresentingPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Presenting our work</h1>
        <p className="text-content">
          Outline how we structure and present our findings, including narrative flow, visuals, and interactive components.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/narrative/pre-covid">Next section → Pre-Covid Analysis</a>
        </div>
      </section>
    </main>
  );
};

export default NarrativePresentingPage;

