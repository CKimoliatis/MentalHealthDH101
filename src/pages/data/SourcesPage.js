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
      </section>
    </main>
  );
};

export default SourcesPage;
