import React from 'react';
import '../Pages.css';

const TimelinePage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Timeline of Educational Accessibility in the U.S.</h1>
        <p className="text-content">
          This timeline traces the advancement of educational accessibility across gender, ethnic, and socioeconomic demographics in the history of United States education. This collection of historical events includes movements, Supreme Court cases, and federal laws from the 1800s to the present day.
        </p>

        <figure className="figure" style={{ marginTop: '1.5rem' }}>
          <div className="embed-wrapper">
            <iframe
              title="Interactive timeline of educational accessibility milestones in the United States"
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=v2%3A2PACX-1vSjJTtrfARDYytwvlCSyUFYbHuprV-Wp5YaDTcSZLK1StNCg2mRu1jL8seYa-0WOWS3zqIxgh1KsmCI&font=Default&lang=en&initial_zoom=2&width=100%25&height=650"
              width="100%"
              height="650"
              allowFullScreen
              frameBorder="0"
            />
          </div>
          <figcaption className="figure-caption">
            Interactive timeline of U.S. educational accessibility milestones from the 1800s to today.
          </figcaption>
          <details>
            <summary>Show detailed description of this visualization</summary>
            <p>
              Interactive timeline listing key laws, court cases, and movements
              that expanded educational access across gender, racial, and
              socioeconomic groups from the 1800s to the present. Users can
              navigate horizontally to view events in chronological order and
              read brief descriptions for each milestone to see how access has
              evolved over time.
            </p>
          </details>
        </figure>

        <div className="next-section">
          <a className="next-link" href="#/introduction/literature">Next section → Literature Review</a>
        </div>
      </section>
    </main>
  );
};

export default TimelinePage;
