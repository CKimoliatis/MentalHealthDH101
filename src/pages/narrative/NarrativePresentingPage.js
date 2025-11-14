import React from 'react';
import '../Pages.css';

const NarrativePresentingPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Presenting our work</h1>
         <p className="text-content">
          One of the primary methods we used to visualize the dataset was line graphs. This choice makes it easy to see opportunity gaps over a large time span and to compare subjects such as Math and ELA/RLA. We also used stacked bar charts to compare academic outcomes across gender groups and observe how variation changes by year and by subject.
        </p>
        <p className="text-content">
          Many of our visualizations are standardized to a baseline of 0 to communicate recovery and quantify the magnitude of opportunity gaps. With that baseline, viewers can quickly see whether a group or region experienced positive or negative shifts in a given period.
        </p>
        <p className="text-content">
          For design, we drew inspiration from course example websites and similar public data projects. We prioritized a consistent, readable layout with clear captions and legends, collapsible sections where appropriate, and responsive behavior for mobile. We also emphasized accessibility, including keyboard focus styles and adequate color contrast.
        </p>


        <div className="next-section">
          <a className="next-link" href="#/narrative/pre-covid">Next section → Pre-Covid Analysis</a>
        </div>
      </section>
    </main>
  );
};

export default NarrativePresentingPage;

