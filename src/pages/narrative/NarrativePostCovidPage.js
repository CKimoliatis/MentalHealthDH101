import React from 'react';
import '../Pages.css';

// Image filenames for post‑COVID figures (TeamPage style public paths)
// Example: 'images/postcovid/fig6.png'
const IMAGES = {
  fig6: 'images/precovid/fig6.png',
  fig7: 'images/precovid/fig7.png',
  fig8: 'images/precovid/fig8.png',
};

const NarrativePostCovidPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide narrative-post">
        <h1 className="longform-title">Post Covid Analysis</h1>
        <p className="text-content">
          We examine changes after the onset of COVID‑19, focusing on how score
          differences shifted across racial and gender groups relative to the
          pre‑pandemic baseline.
        </p>

        <h2 className="section-title">Average Math/Reading Score Difference Before and After  Pandemic by Racial and Gender Group, (2015-2018) V.S.（2019-2022）</h2>
        <figure className="figure">
          {IMAGES.fig6 ? (
            <img className="figure-img" src={IMAGES.fig6} alt="Figure 6:  Average Reading Score Difference Before and After Pandemic by Racial and Gender Group" />
          ) : (
            <div className="viz-placeholder" aria-label="Reading differences chart placeholder" />
          )}
          <figcaption className="figure-caption">Figure 6:  Average Reading Score Difference Before and After Pandemic by Racial and Gender Group</figcaption>
        </figure>
        <figure className="figure">
          {IMAGES.fig7 ? (
            <img className="figure-img" src={IMAGES.fig7} alt="Figure 7: Average Math Score Difference Before and After Pandemic by Racial and Gender Group" />
          ) : (
            <div className="viz-placeholder" aria-label="Math differences chart placeholder" />
          )}
          <figcaption className="figure-caption">Figure 7: Average Math Score Difference Before and After Pandemic by Racial and Gender Group</figcaption>
        </figure>
        <p className="text-content text-justify">
          From the two charts, we can clearly see that reading (RLA) scores declined more sharply than math scores for every demographic group. In the reading chart, declines range from approximately -0.008 for Asian students to -0.096 for Black students, showing a wide spread of losses. In contrast, math changes range from +0.042 for Asian students to –0.061 for Black students. This means that while both subjects experienced pandemic-related declines, reading performance dropped more and showed greater inequality across groups, whereas math scores remained more stable.
        </p>
        <p className="text-content text-justify">
          This observation aligns with national research showing that reading achievement was particularly vulnerable during the pandemic. Kuhfeld et al. (2022) found that students in high-poverty and majority Black or Hispanic schools experienced deeper reading setbacks because they faced greater emotional and logistical barriers to learning during the pandemic. The authors note that students in these communities were more likely to experience “stress, anxiety, and concerns about their own or their family’s health,” factors that hindered their learning engagement (YouthTruth, 2021, qtd. in Kuhfeld et al. 2022). These patterns match what we see in our visualization: Black, and Native American students suffered the largest reading declines, while White and Asian students saw more moderate decreases. When interpreted alongside national studies, these findings suggest that the pandemic not only disrupted academic progress but also magnified long-standing structural inequities in the U.S. education system. These results highlight the urgent need for targeted academic recovery policies such as tutoring programs, extended instructional time, and increased support for high-poverty districts.
        </p>

        <h2 className="section-title">ANOVA Results: Significant Difference in Post-2019 Learning Loss: Reading vs. Math</h2>
        <figure className="figure">
          {IMAGES.fig8 ? (
            <img className="figure-img" src={IMAGES.fig8} alt="Figure 8 ：Significant Difference in Post-2019 Learning Loss: Reading vs. Math" />
          ) : (
            <div className="viz-placeholder" aria-label="ANOVA results chart placeholder" />
          )}
          <figcaption className="figure-caption">Figure 8 ：Significant Difference in Post-2019 Learning Loss: Reading vs. Math</figcaption>
        </figure>
        <p className="text-content text-justify">
          A repeated-measures ANOVA was conducted to compare whether the magnitude of score changes from 2015-2018 to 2019-2022 differed significantly between reading and math. The effect of subject (reading change vs. math change) was highly significant, F(1, 9) = 131.5, p = 1.13 × 10⁻⁶. This indicates that the decline in average reading scores was significantly larger than the decline in average math scores.
        </p>
        <p className="text-content text-justify">
          Across subgroups, reading scores showed substantially greater drops after 2019, with many groups experiencing declines between -0.07 and -0.10, whereas math declines were generally smaller, often between -0.04 and -0.06. These results suggest that, within this dataset, reading achievement was more negatively affected by the post-2019 period than math achievement.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/conclusions/results">Next section → Results</a>
        </div>
      </section>
    </main>
  );
};

export default NarrativePostCovidPage;
