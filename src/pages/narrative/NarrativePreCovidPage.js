import React from 'react';
import '../Pages.css';
import TableauEmbed from '../../components/TableauEmbed';

// Filenames for images, using the same pattern as TeamPage (public/images/...)
// Example: 'images/precovid/fig1.png'
const IMAGES = {
  fig1: '',
  fig2: 'images/precovid/fig2.png',
  fig3: 'images/precovid/fig3.png',
  fig4: '',
  fig5: '',
  fig6: 'images/precovid/fig6.png',
  fig7: 'images/precovid/fig7.png',
  fig8: 'images/precovid/fig8.png',
  racialSubjectMath: 'images/precovid/u1.png',
  racialSubjectRLA: 'images/precovid/u2.png',
};

// Optional Tableau fallbacks for figures 4 and 5
const FIG4_URL = "https://public.tableau.com/shared/J62W936GK?:display_count=n&:origin=viz_share_link";
const FIG5_URL = "https://public.tableau.com/shared/8GZ3GNFYY?:display_count=n&:origin=viz_share_link";

// Following TeamPage convention, pass paths like 'images/precovid/<file>' directly.

const NarrativePreCovidPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide narrative-pre">
        <h1 className="longform-title">Pre-COVID Narrative</h1>

        <h2 className="section-title">Socioeconomic Achievement Gap (non ECD and ECD) by State - 2009 - 2019</h2>
        <figure className="figure">
          {IMAGES.fig1 ? (
            <img className="figure-img" src={IMAGES.fig1} alt="Figure 1: Socioeconomic Achievement Gap (non-ECD and ECD) by State" />
          ) : (
            <div className="viz-placeholder" aria-label="Interactive map placeholder" />
          )}
          <figcaption className="figure-caption">Figure 1: Socioeconomic Achievement Gap (non-ECD and ECD) by State</figcaption>
        </figure>
        <p className="text-content text-justify">
          This interactive map was created using Tableau, based on data from the Stanford Education Data Archive (SEDA). It visualizes the average achievement gap between non-economically disadvantaged (Non-ECD) and economically disadvantaged (ECD) students across U.S. states from 2009 to 2019. A filled stepped-color map was used to display the magnitude of the gap, where darker shades represent wider disparities. The year filter slider enables users to explore changes over time and observe how the gap evolved across different states.
        </p>
        <p className="text-content text-justify">
          The interactive visualization reveals that the socioeconomic achievement gap remained persistent and, in many cases, widened between 2009 and 2019. Southern and Midwestern states—such as Alabama, Louisiana, and Arkansas—consistently exhibit larger gaps, reflecting deeper structural inequalities in education and income. In contrast, Western states show relatively stable disparities, while several Northeastern and Central states experienced a noticeable widening of the gap during this period. Notably, Wyoming (WY) stood out in 2009 with one of the largest gaps, but by 2019, its disparity had significantly decreased. By enabling users to filter year by year, the map highlights both geographic and temporal dimensions of inequality, illustrating where and when disparities have intensified. This temporal visualization is significant because it helps our team identify long-term trends in educational inequality and supports our analysis of how socioeconomic status continues to shape student outcomes across regions.
        </p>

        <h2 className="section-title">Racial and Ethnic Achievement Gaps by Subject 2009-2019</h2>
        <figure className="figure">
          {IMAGES.racialSubjectMath ? (
            <img className="figure-img" src={IMAGES.racialSubjectMath} alt="Racial and Ethnic Achievement Gaps by Subject — Math (2009–2019)" />
          ) : (
            <div className="viz-placeholder" aria-label="Racial/Ethnic by Subject — Math placeholder" />
          )}
          <figcaption className="figure-caption">Racial and Ethnic Achievement Gaps by Subject — Math (2009–2019)</figcaption>
        </figure>
        <figure className="figure">
          {IMAGES.racialSubjectRLA ? (
            <img className="figure-img" src={IMAGES.racialSubjectRLA} alt="Racial and Ethnic Achievement Gaps by Subject — Reading/Language Arts (2009–2019)" />
          ) : (
            <div className="viz-placeholder" aria-label="Racial/Ethnic by Subject — RLA placeholder" />
          )}
          <figcaption className="figure-caption">Racial and Ethnic Achievement Gaps by Subject — Reading/Language Arts (2009–2019)</figcaption>
        </figure>

        <h2 className="section-title">Change in Academic Achievement 2009 to 2019</h2>
        <figure className="figure">
          {IMAGES.fig2 ? (
            <img className="figure-img" src={IMAGES.fig2} alt="Figure 2: Change in Academic Achievement" />
          ) : (
            <div className="viz-placeholder" aria-label="Chart placeholder" />
          )}
          <figcaption className="figure-caption">Figure 2: Change in Academic Achievement</figcaption>
        </figure>
        <p className="text-content text-justify">
          From this list of those with positive versus negative change, we can observe that the states who have a positive state tend to be Southern or Western. And, for negative states, we can see that they are usually northeast and northern states. For the context of our project, this visualization is useful because it informs us where we can make policy recommendations. Specifically, we found that Southern and Western states seem to have more of a positive change whereas Northeast and Northern states have more of a negative change. After further research, I found that Southern and Western states could have a positive change because these states started lower than the negative state counterparts. So, they would have more room to improve. On the other hand, Northeast and Northern states appear to already be high performing states. So, there could be a “ceiling effect” where these states have less room for improvement. As mentioned on the website “Education Policy,” the article “Funding Disparities” states “wealthier states with a high fiscal capacity (typically those in the Northeast), have more funding available to spend on education than states with more limited resources (typically those in the South and the West.” From this article, we can infer that one reason for this ceiling effect could be because schools like those in the Northeast already have more funding compared to states in the South and West. So, this is a relevant trend for our project because this indicates that it may be more beneficial for policymakers to do further research in policies that specifically work to improve states like those in the South and West who would greatly benefit from additional financial and educational resources than states in the Northeast and North who, when given additional resources, would experience diminishing returns.
        </p>

        <h2 className="section-title">Male/Female Achievement Gap from 2009 to 2019</h2>
        <figure className="figure">
          {IMAGES.fig3 ? (
            <img className="figure-img" src={IMAGES.fig3} alt="Figure 3: Male and Female Achievement Gap Over Time (2009-2019)" />
          ) : (
            <div className="viz-placeholder" aria-label="Line chart placeholder" />
          )}
          <figcaption className="figure-caption">Figure 3: Male and Female Achievement Gap Over Time (2009-2019)</figcaption>
        </figure>
        <p className="text-content text-justify">
          From this plot, we can see that there is a very slight gender gap for math, which is indicated by the red line that is around 0. On the other hand, there appears to be a modest gap in RLA (reading and language arts), which is seen in the blue line that hovers at around -0.25. This visualization is helpful for our project because it alerts us, and policymakers, where the gender gap should primarily be addressed. Specifically, since the gender gap for reading and language arts appears to be larger than the gender gap for math, it would be more beneficial for policymakers to focus their time and energy into creating and funding programs that aim to minimize this gap in reading and language arts than math. Thus, overall this visualization is helpful because it tells us where the gender gap is the most prevalent between subjects.
        </p>
        <p className="text-content text-justify">
          To further examine this relationship, we decided to look at it for
        </p>

        <h2 className="section-title">Figure 4: Difference between Male and Female Students Grades for Math (2009 - 2019)</h2>
        <figure className="figure">
          {IMAGES.fig4 ? (
            <img className="figure-img" src={IMAGES.fig4} alt="Figure 4: Difference between Male and Female Students Grades for Math (2009 - 2019)" />
          ) : FIG4_URL ? (
            <TableauEmbed
              url={FIG4_URL}
              title="Figure 4: Difference between Male and Female Students Grades for Math (2009 - 2019)"
            />
          ) : (
            <div className="viz-placeholder" aria-label="Map placeholder for math" />
          )}
          <figcaption className="figure-caption">Figure 4: Difference between Male and Female Students Grades for Math (2009 - 2019)</figcaption>
        </figure>

        <h2 className="section-title">Figure 5: Difference between Male and Female Students Grades for Math (2009 - 2019)</h2>
        <figure className="figure">
          {IMAGES.fig5 ? (
            <img className="figure-img" src={IMAGES.fig5} alt="Figure 5: Difference between Male and Female Students Grades for Math (2009 - 2019)" />
          ) : FIG5_URL ? (
            <TableauEmbed
              url={FIG5_URL}
              title="Figure 5: Difference between Male and Female Students Grades for Math (2009 - 2019)"
            />
          ) : (
            <div className="viz-placeholder" aria-label="Map placeholder for RLA" />
          )}
          <figcaption className="figure-caption">Figure 5: Difference between Male and Female Students Grades for Math (2009 - 2019)</figcaption>
        </figure>

        <p className="text-content text-justify">
          From this map in Figure 4 and 5, we can see that there appears to be a larger variance in the average education gap between men and women amongst states for RLA than math. This can be shown in how the range of values for math is (-0.1199 and 0.0944) in Figure 4, creating a variance of around 0.011448. On the other hand, the range of values for RLA is (-0.4215, -0.1391) in Figure 5, creating a variance of around 0.01993. We can observe these ranges using the legend on the right of the plot. So, we can see that RLA has more variance.
        </p>
        <p className="text-content text-justify">
          This is a significant observation because it relates to one of the findings that we found in the article “The Rise of Standards-Aligned Instructional Materials for U.S. K-12 Mathematics and English Language Arts Instruction” where author Julia H. Kaufman writes, “teachers across the United States are more likely to be using instructional materials aligned with state standards for mathematics than for ELA, particularly at the elementary and middle school levels” (3). Additionally, we can see that the average RLA education gap score is around -0.2 whereas the average score for math is around the interval (-0.05, 0.05). So, this observation, in addition to the previous article, can allow the audience to infer that there is a potential association between having standardized materials and reducing the education gap between men and women across subjects. One potential reason for this association is that without standardized teaching, some teachers may rely on more subjective approaches to teaching reading and language arts compared to subjects that are more standardized like math. For instance, a teacher may select a text based on personal preference or emphasize discussion styles that favor one gender over another.
        </p>
        <p className="text-content text-justify">
          Thus, we suggest implementing policies that standardize reading and language arts across the United States.
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
          <a className="next-link" href="#/narrative/post-covid">Next section → Post Covid Analysis</a>
        </div>
      </section>
    </main>
  );
};

export default NarrativePreCovidPage;
