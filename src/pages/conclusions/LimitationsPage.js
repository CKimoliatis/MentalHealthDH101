import React from 'react';
import '../Pages.css';

const LimitationsPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Limitations</h1>
        <p className="text-content">
          SEDA’s variable names are highly compressed and technical, which forced us to keep the codebook open and rename fields to intuitive labels to avoid misusing measures. The codebook offers only brief descriptions, so even simple data cleaning required repeated cross-checks and slowed interpretation.
        </p>
        <p className="text-content">
          Missingness was small overall but uneven: smaller racial groups (Asian, Black, Hispanic, Native American) had higher proportions of missing values, and some years were thinner than others. To keep comparisons consistent we removed rows with missing values, but that choice reduces representation for already smaller subgroups.
        </p>
        <p className="text-content">
          Our dataset did not capture mental health challenges, even though prior work shows they can shape educational opportunity. Rachel Oblath’s longitudinal study on urban, school-age children during the COVID-19 pandemic found Pediatric Symptom Checklist (PSC) scores had not returned to normal by the end of the study period, underscoring unmet demand for child mental health services and the risk of lasting impacts. Without measures like PSC or similar indicators, our analysis may overlook a confounding factor that could change how demographic background relates to educational outcomes.
        </p>
        <p className="text-content">
          Our ANOVA comparing pre/post-pandemic changes used subgroup averages, not individual-level data. Aggregation reduces variation and can overstate statistical significance. Uneven subgroup sizes also strain the ANOVA equal-variance assumption, so results should be read as directional patterns rather than precise effect estimates.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/conclusions/discussions">Next section → Discussions</a>
        </div>
      </section>
    </main>
  );
};

export default LimitationsPage;
