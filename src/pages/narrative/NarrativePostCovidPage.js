import React from 'react';
import '../Pages.css';

const NarrativePostCovidPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Post Covid Analysis</h1>
        <p className="text-content">
          We examine changes after the onset of COVID‑19, focusing on how score
          differences shifted across racial and gender groups relative to the
          pre‑pandemic baseline.
        </p>

        <h2 className="section-title">Average Reading (RLA) Score Difference Before and After Pandemic by Racial and Gender Group</h2>
        <p className="text-content">
          <em>Provide rough introduction of topic before analysis.</em> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Maecenas risus felis,
          accumsan vel fermentum nec, laoreet in eros.
        </p>

        <figure className="figure">
          <div className="viz-placeholder" aria-label="Bar chart placeholder for RLA changes" />
          <figcaption className="figure-caption">Figure 1: Bar chart using R</figcaption>
        </figure>

        <p className="text-content">
          <em>How plot was created; interpretation of plot.</em> Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus ornare massa in ex
          ullamcorper, gravida cursus nibh congue. Cras at diam euismod, maximus
          in nisi, efficitur magna.
        </p>

        <h2 className="section-title">Average Math Score Difference Before and After Pandemic by Racial and Gender Group</h2>
        <p className="text-content">
          <em>Provide rough introduction of topic before analysis.</em> Duis
          finibus dui at orci, consectetur adipiscing elit. Maecenas risus felis,
          accumsan vel fermentum nec, laoreet in eros.
        </p>

        <figure className="figure">
          <div className="viz-placeholder" aria-label="Bar chart placeholder for Math changes" />
          <figcaption className="figure-caption">Figure 2: Bar chart using R</figcaption>
        </figure>

        <p className="text-content">
          <em>How plot was created; interpretation of plot.</em> Nullam porttitor
          diam eu tristique luctus. Morbi venenatis augue non felis facilisis,
          facilisis et sem velit, bibendum placerat ipsum.
        </p>

        <h2 className="section-title">Assessing Statistical Significance of Math and RLA Score Difference using ANOVA Table</h2>
        <p className="text-content">
          <em>Provide rough introduction of topic before analysis.</em> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Maecenas risus felis,
          accumsan vel fermentum nec, laoreet in eros.
        </p>

        <figure className="figure">
          <div className="viz-placeholder" aria-label="ANOVA table placeholder" />
          <figcaption className="figure-caption">Table 1: ANOVA table using R</figcaption>
        </figure>

        <p className="text-content">
          <em>How table was created; interpretation of table.</em> Proin gravida
          quis enim. Nullam sed massa quis magna tempor iaculis. Nunc congue
          faucibus lorem vitae aliquet.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/conclusions/results">Next section → Results</a>
        </div>
      </section>
    </main>
  );
};

export default NarrativePostCovidPage;
