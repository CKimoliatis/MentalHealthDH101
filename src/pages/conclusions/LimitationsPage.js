import React from 'react';
import '../Pages.css';

const LimitationsPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Limitations</h1>
        <p className="text-content">
          Discuss constraints, biases, and uncertainties in the data and methods. Explain how these limitations shape the interpretation of results and suggest cautionary notes.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/conclusions/discussions">Next section → Discussions</a>
        </div>
      </section>
    </main>
  );
};

export default LimitationsPage;
