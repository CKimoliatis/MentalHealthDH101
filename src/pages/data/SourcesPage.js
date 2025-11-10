import React from 'react';
import '../Pages.css';

const SourcesPage = () => {
  return (
    <main className="page-container">
      <section className="longform">
        <h1 className="longform-title">The Three Levels of Our DH Project</h1>

        <h2 className="section-title">Sources</h2>
        <p className="text-content">
          For our research project, we initially wanted to observe a dataset that would simply show us how COVID-19 impacted education overall. However, over the course of our literature review, we often found that it was also important for us to consider how COVID-19 impacted education across specific racial, gender, and socioeconomic groups as well. For instance, in the article “The Hidden Costs of Virtual Learning: Impact of Online Education on K-12 Student Attrition During COVID-19,” author Hyesun An writes, “students from affluent families were often able to transition from public to private schools, which were more likely to offer in-person learning.” Additionally, author Aras Bozkurt’s article “The Impact of COVID-19 on Education: A Meta-Narrative Review”, which features the below concept map, underwent a bibliometric analysis of 1150 publications on COVID-19 and tried to analyze the impact of the pandemic on education using data mining and other analytic methods. Through text mining and concept mapping, they noticed a path in the figure below of Impact &gt; outbreak &gt; coronavirus &gt; pandemic &gt; social, where “the disparities between low and high socio-economic status families and school districts in terms of digital pedagogy inequality may deepen as teachers in affluent schools are more likely to offer a wide range of online learning activities and thereby secure better student engagement, participation, and interaction.”
        </p>

        <figure className="figure">
          <img
            className="figure-img"
            src="images/mental.png"
            alt="Concept map on COVID-19’s impact on education (adapted from Bozkurt)."
          />
          <figcaption className="figure-caption">
            Concept map reference mentioned above. Replace with your final image if available.
          </figcaption>
        </figure>

        <p className="text-content">
          Thus, through a relationship like this, it becomes impossible to avoid looking at how demographics can impact one’s experience with education during the pandemic, because it is often that, as Bozkurt mentioned, one’s demographic can shape educational opportunities. This then impacts how well one is able to accommodate a national crisis like the pandemic.
        </p>

        <p className="text-content">
          Thus, because of academic literature like the ones mentioned above, we decided that it would be more beneficial for us to examine not just how COVID-19 has impacted academic success but also take a magnified look into education opportunity gaps across different demographics. In doing so, we hope to help policymakers and educational stakeholders by offering an early investigation into potential openings where additional financial and educational investigations can minimize this educational loss.
        </p>

        <p className="text-content" style={{ marginBottom: '2rem' }}>
          So, when we were analyzing various datasets, two that stood out were from the Stanford Education Data Archive (SEDA): the “Administrative District Annual Subgroup 2024.2” dataset and the “Geographic District Long 5.0” dataset. Both were chosen because they were the only datasets that showed how education was before, during, and after the pandemic, as well as how education varied across gender, socioeconomic, and racial groups.
        </p>

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

        <h2 className="section-title">Presentation</h2>
        <p className="text-content">
          One of the primary methods we used to visualize the dataset was line graphs. This choice makes it easy to see opportunity gaps over a large time span and to compare subjects such as Math and ELA/RLA. We also used stacked bar charts to compare academic outcomes across gender groups and observe how variation changes by year and by subject.
        </p>
        <p className="text-content">
          Many of our visualizations are standardized to a baseline of 0 to communicate recovery and quantify the magnitude of opportunity gaps. With that baseline, viewers can quickly see whether a group or region experienced positive or negative shifts in a given period.
        </p>
        <p className="text-content">
          For design, we drew inspiration from course example websites and similar public data projects. We prioritized a consistent, readable layout with clear captions and legends, collapsible sections where appropriate, and responsive behavior for mobile. We also emphasized accessibility, including keyboard focus styles and adequate color contrast.
        </p>
      </section>
    </main>
  );
};

export default SourcesPage;
