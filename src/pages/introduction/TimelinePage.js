import React from 'react';
import '../Pages.css';

const TimelinePage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Timeline</h1>
        <p className="text-content">
          Summarize key milestones and events relevant to the project chronology. Add dates and brief descriptions to orient readers before diving into analysis.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/introduction/literature">Next section → Literature Review</a>
        </div>
      </section>
    </main>
  );
};

export default TimelinePage;
