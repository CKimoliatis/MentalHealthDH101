import React from 'react';
import '../Pages.css';

const SourcesPage = () => {
  return (
    <main className="page-container">
      <section className="longform">
        <h1 className="longform-title">The Three Levels of Our DH Project</h1>

        <h2 className="section-title">Processing</h2>
        <p className="text-content">
          After deciding on our data sources, we found the dataset collection contained dozens of files, which made it difficult to determine which version to use. We first explored a random dataset and quickly realized its size and complexity. To clarify variable meanings, we downloaded the accompanying codebook.
        </p>
        <p className="text-content">
          We ultimately selected Administrative District Annual Subgroup 2024.2 as our primary dataset because it spans 2009–2024, enabling longitudinal analysis of the COVID-19 period. We also used Geographic District Long 5.0 with pre-calculated gap variables such as gender, race, and economic status to compare achievement gaps across subgroups.
        </p>
        <p className="text-content">
          To improve readability, we renamed several variables with simpler labels—for example, replacing long variable names with shorter, descriptive terms like Mean-White and Mean-ECD to represent the mean scores for specific demographic groups. We addressed missingness by filtering out rows with incomplete or unreported data to keep the analysis accurate.
        </p>
        <p className="text-content" style={{ marginBottom: '2rem' }}>
          Finally, we used Tableau’s Pivot function to consolidate mean score variables for White, Black, Asian, and Hispanic students into a single Race field with corresponding mean values. This transformation allowed for clearer and more consistent visual comparisons across racial groups.
        </p>
      </section>
    </main>
  );
};

export default SourcesPage;
