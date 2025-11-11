import React from 'react';
import '../Pages.css';

const DiscussionsPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Discussions</h1>
        <p className="text-content">
          Interpret the results in context. Connect findings to prior literature, discuss implications, and outline directions for policy or further research.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/data-critique">Next section → Data Critique</a>
        </div>
      </section>
    </main>
  );
};

export default DiscussionsPage;
