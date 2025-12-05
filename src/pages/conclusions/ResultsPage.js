import React from 'react';
import '../Pages.css';

const ResultsPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Results</h1>
        <h2 className="section-title">Socioeconomic Achievement Gaps (2009-2019)</h2>
        <p className="text-content">
          In our socioeconomic achievement-gap, we found large disparities between economically disadvantaged (ECD) and non-disadvantaged students. Notably, states primarily in the South and Midwest consistently had wider gaps whereas Western states were relatively consistent.
        </p>
        <p className="text-content">
          A few states, such as Wyoming, had meaningful improvements over time.
        </p>
        <p className="text-content">
          However, over time, this map shows how these gaps have changed unevenly across regions over time.
        </p>

        <h2 className="section-title">Racial and Ethnic Achievement Gaps (2009-2019)</h2>
        <p className="text-content">
          For our bar charts, we found that Asian and White students scored highest in both math and reading whereas Black and Hispanic students scored substantially lower. This gap was most evident in math.
        </p>
        <p className="text-content">
          When we look specifically at our line chart, we found that the White-Asian gap remained below zero, indicating that Asian students tended to outperform White students. The White-Hispanic gap is slightly narrowed, which is best seen in reading. And, the White-Black gap remained the largest and most persistent gap and even widened slightly between 2009 and 2019.
        </p>

        <h2 className="section-title">Geographic Trends in Change in Academic Achievement (2009-2019)</h2>
        <p className="text-content">
          When we look at how academic achievement differs on an individual state-by-state basis, we found that Southern and Western states tended to have the most positive achievement change whereas states in the North and Northeast tended to have more negative changes.
        </p>
        <p className="text-content">
          One reason this could have occurred is because states in the North and Northeast tend to have more funding already and have more of a “ceiling effect” than states with less funding like those in the South and West.
        </p>

        <h2 className="section-title">Gender Achievement Gaps (2009-2019)</h2>
        <p className="text-content">
          From our line charts, we found that there was a larger gender gap in reading and language arts.
        </p>
        <p className="text-content">
          There is also a greater variance in reading gaps than in math. We also found that reading gaps ranged widely across states whereas math gaps narrowly clustered around zero.
        </p>
        <p className="text-content">
          One reason this could have occurred is because reading and language curriculum are not as standardized as math. So, this could have caused reading gaps to have more fluctuations across each state than math.
        </p>

        <h2 className="section-title">Post-COVID Achievement change (2015-2018 vs. 2019-2022)</h2>
        <p className="text-content">
          Reading scores dropped more sharply than math scores for every racial and gender group. This suggests that reading was more sensitive to pandemic disruptions, especially when students lost consistent routines. Math scores declined less overall, and in some cases, the changes were quite small. Asian students showed slight improvement in math.
        </p>
        <p className="text-content">
          Black, Hispanic, and Native American students showed the largest reading declines, while Asian students showed the smallest losses. This widening gap suggests that the pandemic amplified existing inequalities in educational access.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/conclusions/limitations">Next section → Limitations</a>
        </div>
      </section>
    </main>
  );
};

export default ResultsPage;
