import React from 'react';
import '../Pages.css';

const NarrativeIntroductionPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Introduction</h1>
        <p className="text-content">
          Placeholder
        </p>

        <div className="next-section">
          <a className="next-link" href="#/narrative/literature">Next section → Literature Review</a>
        </div>
      </section>
    </main>
  );
};

export default NarrativeIntroductionPage;

