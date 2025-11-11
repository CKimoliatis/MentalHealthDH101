import React from 'react';
import '../Pages.css';

const NarrativePreCovidPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Pre Covid Analysis</h1>
        <p className="text-content">
          This section establishes the pre‑pandemic baseline. We outline key gaps
          by socioeconomic status and gender, then map where those gaps are most
          pronounced across states.
        </p>

        <h2 className="section-title">Socioeconomic Achievement Gap (Non‑ECD vs ECD) by State — 2019</h2>
        <p className="text-content">
          <em>Provide rough introduction of topic before analysis.</em> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Maecenas risus felis,
          accumsan vel fermentum nec, laoreet in eros. Vestibulum ac mi elit.
        </p>

        <figure className="figure">
          <div className="viz-placeholder" aria-label="Interactive map placeholder" />
          <figcaption className="figure-caption">Figure 1: Interactive map using Tableau</figcaption>
        </figure>

        <p className="text-content">
          <em>How plot was created; interpretation of plot.</em> Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Phasellus ornare massa in ex
          ullamcorper, gravida cursus nibh congue. Cras at diam euismod, maximus
          in nisi, efficitur magna.
        </p>

        <h2 className="section-title">Male/Female Achievement Gap from 2009 to 2019</h2>
        <p className="text-content">
          <em>Provide rough introduction of topic before analysis.</em> Duis
          finibus dui at orci, consectetur adipiscing elit. Maecenas risus felis,
          accumsan vel fermentum nec, laoreet in eros.
        </p>

        <figure className="figure">
          <div className="viz-placeholder" aria-label="Line chart placeholder" />
          <figcaption className="figure-caption">Figure 2: Line chart using R</figcaption>
        </figure>

        <p className="text-content">
          <em>How plot was created; interpretation of plot.</em> Nullam porttitor
          diam eu tristique luctus. Morbi venenatis augue non felis facilisis,
          facilisis et sem velit, bibendum placerat ipsum.
        </p>

        <h2 className="section-title">Male/Female Achievement Gap by State from 2009 to 2019</h2>
        <p className="text-content">
          <em>Provide rough introduction of topic before analysis.</em> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Maecenas risus felis,
          accumsan vel fermentum nec, laoreet in eros.
        </p>

        <figure className="figure">
          <div className="viz-placeholder" aria-label="Map placeholder" />
          <figcaption className="figure-caption">Figure 3: Map using Tableau</figcaption>
        </figure>

        <p className="text-content">
          <em>How plot was created; interpretation of plot.</em> Proin gravida
          quis enim. Nullam sed massa quis magna tempor iaculis. Nunc congue
          faucibus lorem vitae aliquet.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/narrative/post-covid">Next section → Post Covid Analysis</a>
        </div>
      </section>
    </main>
  );
};

export default NarrativePreCovidPage;
