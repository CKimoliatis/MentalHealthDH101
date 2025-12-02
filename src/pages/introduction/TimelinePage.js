import React from 'react';
import '../Pages.css';

const TimelinePage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Timeline</h1>
        {/* <p className="text-content">
          Summarize key milestones and events relevant to the project chronology. Add dates and brief descriptions to orient readers before diving into analysis.
        </p> */}

        <div className="embed-wrapper" style={{ marginTop: '1.5rem' }}>
          <iframe
            title="Project timeline"
            src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vSjJTtrfARDYytwvlCSyUFYbHuprV-Wp5YaDTcSZLK1StNCg2mRu1jL8seYa-0WOWS3zqIxgh1KsmCI&font=Default&lang=en&initial_zoom=2&width=100%25&height=650"
            width="100%"
            height="650"
            allowFullScreen
            frameBorder="0"
          />
        </div>

        <div className="next-section">
          <a className="next-link" href="#/introduction/literature">Next section → Literature Review</a>
        </div>
      </section>
    </main>
  );
};

export default TimelinePage;
