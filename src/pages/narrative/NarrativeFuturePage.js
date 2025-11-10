import React from 'react';
import '../Pages.css';

const NarrativeFuturePage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Future Research</h1>
        <p className="text-content">
          Currently, society is in a state that is almost fully, if not completely, recovered from the pandemic. However, there are still lingering implications of the pandemic’s impact on education. For instance, in the article “Trajectories and Correlates of Mental Health among Urban, School-Age Children during the COVID-19 Pandemic: A Longitudinal Study,” the author Rachel Oblath ran a longitudinal cohort study investigating how children’s mental health and social risks have been impacted by COVID-19. Oblath writes, “the findings that Pediatric Symptom Checklist [(a tool used to identify psychosocial problems)]] total scores had not returned to normal levels by the end of our study period supports call for action to meet the increased demand for child mental health services and prevent more serious long-term consequences”.
        </p>
        <div className="next-section">
          <a className="next-link" href="#/narrative/introduction">Back to start → Introduction</a>
        </div>
      </section>
    </main>
  );
};

export default NarrativeFuturePage;

