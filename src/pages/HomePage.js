import React from 'react';
import './Pages.css';

const HomePage = () => {
  return (
    <main className="page-container">
      <section className="home-hero">
        <div className="home-hero-inner home-center">
          <h1 className="longform-title home-hero-title">COVID-19 and Educational Opportunity</h1>
          <p className="longform-subtitle home-hero-subtitle">
            How did the COVID-19 pandemic affect educational opportunities and success across race, gender, and socio-economic status?
          </p>
        </div>
      </section>

      <section className="longform longform-wide home-center home-about">
        <h2 className="section-title">About the Project</h2>
        <p className="text-content">
          We analyze how the pandemic disrupted and reshaped learning opportunities across U.S. districts, focusing on differences by race, gender, and socio-economic status. Using data from the Stanford Education Data Archive (SEDA), we pair quantitative trends with context to understand where gaps widened, where recovery emerged, and who was most affected.
        </p>
      </section>

      <section className="longform longform-wide">
        <h2 className="section-title">Our Research Questions</h2>
        <ul className="research-list">
          <li className="research-item">How did COVID-19 shift educational opportunities and success across race, gender, and socio-economic status?</li>
          <li className="research-item">Where did gaps widen or narrow across subjects (Math vs. ELA), grades, and regions during and after the pandemic?</li>
          <li className="research-item">Which student groups experienced the steepest declines or strongest recoveries, and what patterns stand out over time?</li>
        </ul>
      </section>

      <section className="longform longform-wide">
        <h2 className="section-title">Goals</h2>
        <ul className="research-list">
          <li className="research-item">Provide clear visuals that trace pandemic-era declines and recoveries.</li>
          <li className="research-item">Clarify subgroup differences so disparities by race, gender, and socio-economic status are visible and actionable.</li>
          <li className="research-item">Ground findings in transparent methods to support informed, equitable responses.</li>
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
