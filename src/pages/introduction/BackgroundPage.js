import React from 'react';
import '../Pages.css';

const BackgroundPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Background Information</h1>
        <p className="text-content">
          Provide essential context, definitions, and framing for the topic here. Outline key terms,
          scope, and any prior conditions that help readers understand the narrative that follows.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/introduction/timeline">Next section → Timeline</a>
        </div>
      </section>
    </main>
  );
};

export default BackgroundPage;
