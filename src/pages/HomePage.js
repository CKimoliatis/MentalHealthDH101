import React from 'react';
import './Pages.css';

const HomePage = () => {
  return (
    <main className="page-container">
      <section className="home-hero">
        <div className="home-hero-inner home-center">
          <h1 className="longform-title home-hero-title">Project: Mind</h1>
          <p className="longform-subtitle home-hero-subtitle">
            Exploring how race, gender, and economic status shape educational opportunity and outcomes across time and place.
          </p>
        </div>
      </section>

      <section className="longform longform-wide home-center home-about">
        <h2 className="section-title">About the Project</h2>
        <p className="text-content">
          This site presents a narrative and a set of visualizations about educational opportunity gaps in the United States. We analyze trends across districts and subgroups using data from the Stanford Education Data Archive (SEDA), pairing quantitative patterns with careful interpretation.
        </p>
      </section>

      <section className="longform longform-wide">
        <h2 className="section-title">Our Research Questions</h2>
        <ul className="research-list">
          <li className="research-item">How have opportunity gaps changed since 2009, including the COVID‑19 period?</li>
          <li className="research-item">How do gaps differ across subjects (Math vs. ELA) and regions?</li>
          <li className="research-item">Which subgroups (race, gender, economic status) see the largest shifts?</li>
        </ul>
      </section>

      <section className="longform longform-wide">
        <h2 className="section-title">Goals</h2>
        <ul className="research-list">
          <li className="research-item">Surface clear, trustworthy visuals for trends and gaps.</li>
          <li className="research-item">Explain methods and limits to avoid over‑claiming.</li>
          <li className="research-item">Support equitable, informed conversations about opportunity.</li>
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
