import React from 'react';
import '../Pages.css';

const ResultsPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Results</h1>
        <p className="text-content">
          Summarize the key findings derived from the analysis. Highlight the most significant patterns and outcomes supported by the data and visuals presented earlier.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/conclusions/limitations">Next section → Limitations</a>
        </div>
      </section>
    </main>
  );
};

export default ResultsPage;
