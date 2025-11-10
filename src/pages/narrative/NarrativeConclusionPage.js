import React from 'react';
import '../Pages.css';

const NarrativeConclusionPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Conclusion</h1>
        <p className="text-content">Summarize the key takeaways and what the data suggests about opportunity gaps and recovery after the pandemic.</p>
        <div className="next-section">
          <a className="next-link" href="#/narrative/future">Next section → Future Research</a>
        </div>
      </section>
    </main>
  );
};

export default NarrativeConclusionPage;

