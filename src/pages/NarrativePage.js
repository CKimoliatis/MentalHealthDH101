import React from 'react';
import './Pages.css';

const NarrativePage = () => {
  return (
    <main className="page-container">
      <section className="hero-section">
        <h1 className="hero-title">The Silent Epidemic</h1>
        <p className="hero-description">
          How do race, gender, and economic status affect education opportunities and success?
        </p>
      </section>

  <section className="content-card">
    <h2 className="section-title">About This Project</h2>
    <p className="text-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
    </p>
    <p className="text-content">
      Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
    </p>
  </section>

  <section className="content-card">
    <h2 className="section-title">Data Processing</h2>

    <details className="accordion" open>
      <summary className="accordion-summary subsection-title">Overview (Led by Kimya & Jasmine)</summary>
      <div className="accordion-content">
        <p className="text-content">
          After deciding on our data sources, we were surprised to find that the same dataset collection contained dozens of different files. This initially made it difficult to determine which version to use. We randomly downloaded one dataset for exploration and soon realized that we had underestimated its size and complexity. Once we opened the file, we were confused about the meanings of many variables, so we downloaded the accompanying codebook to help interpret them.
        </p>
        <p className="text-content">
          After exploring the various dataset collections, we ultimately selected “Administrative District Annual Subgroup 2024.2” as our primary dataset. This dataset covers the years 2009–2024, making it suitable for examining longitudinal trends, particularly the impact of the COVID-19 pandemic on academic performance. In addition, we used the “Geographic District Long 5.0” dataset, which includes pre-calculated gap variables such as those representing gender, racial, and economic status differences. This dataset allowed us to analyze educational inequality trends by comparing achievement gaps across different demographic subgroups.
        </p>
        <p className="text-content">
          To make the dataset more readable and easier to analyze, we renamed several variables with simplified and intuitive labels—for example, changing long variable names to clearer ones such as Mean-White and Mean-ECD to represent the mean scores for specific demographic groups. During this process, we also noticed that the dataset contained many missing values. We performed data cleaning by filtering out or removing rows with incomplete or unreported data to ensure that our analyses would be accurate.
        </p>
        <p className="text-content">
          Finally, to compare the average scores of different racial groups more directly, we used Tableau’s Pivot function to transform the dataset. We pivoted the mean score variables for White, Black, Asian, and Hispanic students into a single “Race” field with corresponding mean values. This step allowed us to create clearer and more consistent visual comparisons across racial groups in our analysis.
        </p>
      </div>
    </details>
  </section>

  <section className="content-card">
    <h2 className="section-title">Our Research Questions</h2>
    <ul className="research-list">
      <li className="research-item">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet est et sapien ullamcorper pharetra?
      </li>
      <li className="research-item">
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor?
      </li>
      <li className="research-item">
        Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi?
      </li>
    </ul>
  </section>

  <section className="content-card">
    <h2 className="section-title">Presentation</h2>

    <details className="accordion" open>
      <summary className="accordion-summary subsection-title">Visualization Methods</summary>
      <div className="accordion-content">
        <ul className="research-list">
          <li className="research-item">Used line graphs to show opportunity gaps over time and compare subjects (Math vs. ELA/RLA), making patterns easy to see across years.</li>
          <li className="research-item">Used stacked bar charts to compare academic success across gender groups and observe variation by year and subject.</li>
          <li className="research-item">Standardized many visuals to 0 to communicate academic recovery and quantify opportunity gaps, letting viewers see positive vs. negative shifts by group or region.</li>
        </ul>
      </div>
    </details>

    <details className="accordion">
      <summary className="accordion-summary subsection-title">Design Choices</summary>
      <div className="accordion-content">
        <p className="text-content">Our primary design reasoning came from class example websites and reviewing similar public data sites for patterns in navigation, layout, and readability.</p>
        <ul className="research-list">
          <li className="research-item">Kept a clean, dark theme with a consistent blue accent for emphasis and continuity.</li>
          <li className="research-item">Used accordions and concise bullets to avoid long text blocks and improve scanability.</li>
          <li className="research-item">Adopted clear captions and straightforward legends to guide interpretation.</li>
          <li className="research-item">Hash-based routing supports GitHub Pages and ensures reliable navigation; layout is responsive for mobile.</li>
          <li className="research-item">Prioritized accessibility: keyboard-focus styles on accordions and good contrast for text.</li>
        </ul>
        <p className="text-content">These choices balance clarity, accessibility, and visual hierarchy while keeping attention on trends and gaps rather than decorative effects.</p>
      </div>
    </details>
  </section>
    </main>
  );
};

export default NarrativePage;
