import React from "react";
import "../Pages.css";
import TableauEmbed from "../../components/TableauEmbed";

// Tableau share links for each visualization. Replace placeholders with your published viz URLs.
const TABLEAU_URLS = {
  fig1: "https://public.tableau.com/views/SEDAdata-1/SocioeconomicAchievementGapNon-ECDECDbyState?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  racialSubjectMath:
    "https://public.tableau.com/views/SEDAdata-1/RacialandEthnicDisparitiesinMathandELAAchievement?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  racialSubjectRLA:
    "https://public.tableau.com/views/SEDAdata-1/TrendsinRacialAchievementGapsOverTimebySubject?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  fig4: "https://public.tableau.com/shared/J62W936GK?:display_count=n&:origin=viz_share_link",
  fig5: "https://public.tableau.com/shared/8GZ3GNFYY?:display_count=n&:origin=viz_share_link",
};

const IMAGE_URLS = {
  fig2: "images/precovid/fig2.png",
  fig3: "images/precovid/fig3.png",
};

const renderTableau = (url, title, ariaLabel) => {
  return url ? (
    <TableauEmbed url={url} title={title} aspectRatio="4 / 3" />
  ) : (
    <div className="viz-placeholder" aria-label={ariaLabel} />
  );
};

const NarrativePreCovidPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide narrative-pre">
        <h1 className="longform-title">Pre-COVID Narrative</h1>

        <h2 className="section-title">
          Socioeconomic Achievement Gap (non ECD and ECD) by State - 2009 - 2019
        </h2>
        <figure className="figure">
          {renderTableau(
            TABLEAU_URLS.fig1,
            "Figure 1: Socioeconomic Achievement Gap (non-ECD and ECD) by State",
            "Interactive map placeholder"
          )}
          <figcaption className="figure-caption">
            Figure 1: Socioeconomic Achievement Gap (non-ECD and ECD) by State
          </figcaption>
          <details>
            <summary>Show detailed description of this visualization</summary>
            <p>
              A U.S. map is shaded by state where the intensity of colors
              indicate achievement gaps between economically disadvantaged and
              non-disadvantaged students. A darker color indicates a larger
              achievement gap while a lighter color indicates a smaller
              achievement gap. Southern and Midwestern states appear the darkest
              whereas Western states appear to be lighter. Thus, the South and
              Midwest appear to have the widest gap.
            </p>
          </details>
        </figure>
        <p className="text-content text-justify">
          The socioeconomic achievement-gap map created from SEDA data
          visualizes disparities in academic performance between economically
          disadvantaged (ECD) and non-disadvantaged (Non-ECD) students across
          U.S. states from 2009 to 2019. The filled stepped-color design
          highlights the magnitude of inequality, where darker states represent
          wider socioeconomic gaps. The visualization reveals that these
          disparities are both persistent and geographically patterned, with
          Southern and Midwestern states—such as Alabama, Louisiana, and
          Arkansas—consistently showing the largest gaps. Several Northeastern
          and Central states exhibit widening disparities over time, while
          Western states remain relatively stable. Wyoming provides an
          exception: although it had one of the widest gaps in 2009, the
          disparity narrowed markedly by 2019. By enabling year-by-year
          exploration, the map captures both temporal and spatial dimensions of
          inequality, showing where and when socioeconomic disparities
          intensified.
        </p>
        <p className="text-content text-justify">
          Recent developmental research helps explain why socioeconomic
          achievement gaps emerge early and remain stable across time. A large
          longitudinal study across ten U.S. sites shows that parent
          education—rather than income alone—predicts children’s early math and
          reading achievement indirectly through maternal sensitivity,
          cognitively stimulating home environments, and children’s
          working-memory skills (
          <a
            href="https://doi.org/10.1016/j.jecp.2025.106335"
            target="_blank"
            rel="noopener noreferrer"
          >
            Waters et al., 2025
          </a>
          ). These mechanisms illustrate how early home environments shape
          foundational executive functions, especially working memory, which is
          strongly linked to later academic achievement from preschool through
          adolescence (Blair & Razza 2007; Ahmed et al. 2019). Because working
          memory consistently predicts long-term gains in both math and reading,
          early SES-related differences in cognitive stimulation consolidate
          into persistent academic gaps over time.
        </p>
        <p className="text-content text-justify">
          When interpreted alongside this literature, the SEDA map highlights
          that socioeconomic achievement gaps reflect not merely school-level
          differences but deep, developmentally rooted inequalities formed well
          before children enter formal schooling. Because parent education
          shapes early home environments, cognitive stimulation, and
          foundational executive-function skills, SES-related disparities
          consolidate into long-term achievement gaps across states. This
          explains why the ECD–Non-ECD gap persists across the entire decade and
          why states with long-standing structural disadvantage—underfunded
          schools, concentrated poverty, and fewer early-childhood
          supports—display consistently larger disparities.
        </p>
        <p className="text-content text-justify">
          Taken together, the visualization and developmental research
          illustrate that socioeconomic achievement gaps are structurally
          produced, cognitively reinforced, and geographically patterned. Their
          persistence over time demonstrates that inequality originates in early
          childhood contexts rather than in later school experiences alone.
          These findings underscore the need for policies that prioritize early
          cognitive stimulation, parenting support, equitable state funding, and
          interventions aimed at enhancing executive-function development,
          particularly in regions with persistent socioeconomic disadvantage.
        </p>

        <h2 className="section-title">
          Racial and Ethnic Achievement Gaps by Subject 2009-2019
        </h2>
        <figure className="figure">
          {renderTableau(
            TABLEAU_URLS.racialSubjectMath,
            "Racial and Ethnic Achievement Gaps by Subject — Math (2009–2019)",
            "Racial/Ethnic by Subject — Math placeholder"
          )}
          <figcaption className="figure-caption">
            Racial and Ethnic Achievement Gaps by Subject — Math (2009–2019)
          </figcaption>
          <details>
            <summary>Show detailed description of this visualization</summary>
            <p>
              Bar chart comparing math and reading scores by race/ethnicity.
              Asian and White students post the highest averages in both
              subjects, while Black and Hispanic students score substantially
              lower. The math gap is the most pronounced, indicating larger and
              more persistent disparities in mathematics compared to reading.
            </p>
          </details>
        </figure>
        <p className="text-content text-justify">
          This visualization compares average math and English/language arts
          scores across racial groups. The bar chart reveals that Asian and
          White students tend to achieve higher mean scores in both subjects,
          whereas Black and Hispanic students consistently perform below the
          overall average. The gap is more pronounced in mathematics, suggesting
          that racial disparities in math achievement remain larger and more
          persistent than in language arts.
        </p>
        <p className="text-content text-justify">
          This pattern aligns with prior research highlighting long-standing
          racial inequalities in U.S. education. “Barnes and Slate found that
          African American and Latino students enter higher education with lower
          levels of college readiness in both math and reading compared to their
          White peers” (2023). Moreover, these disparities are often the
          cumulative outcome of structural inequities—such as unequal school
          funding, teacher quality, and access to advanced coursework—that begin
          early in the K–12 pipeline. The SEDA data reinforces this by showing
          that these gaps exist well before students reach college.
        </p>
        <p className="text-content text-justify">
          <a
            href="https://doi.org/10.1080/07448481.2021.1947838"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watt et al. (2023)
          </a>{" "}
          provide a psychological and social explanation for why these gaps
          persist into post-secondary education. Their study found that students
          of color are more likely to experience Adverse Childhood Experiences
          (ACEs)—such as family instability, violence, or chronic stress—and
          that these early-life adversities are significantly correlated with
          lower GPAs in college. In other words, systemic inequities not only
          shape academic opportunities but also impose psychological burdens
          that hinder long-term educational outcomes. Thus, the racial
          achievement gaps visible in SEDA’s K–12 data reflect both structural
          disadvantages and trauma-related effects that continue into higher
          education.
        </p>
        <figure className="figure">
          {renderTableau(
            TABLEAU_URLS.racialSubjectRLA,
            "Racial and Ethnic Achievement Gaps by Subject — Reading/Language Arts (2009–2019)",
            "Racial/Ethnic by Subject — RLA placeholder"
          )}
          <figcaption className="figure-caption">
            Racial and Ethnic Achievement Gaps by Subject — Reading/Language
            Arts (2009–2019)
          </figcaption>
          <details>
            <summary>Show detailed description of this visualization</summary>
            <p>
              Line chart of racial achievement gaps from 2009–2019. The
              White–Asian gap stays below zero, showing Asian students
              outperform White students. The White–Hispanic gap remains positive
              but narrows modestly, especially in reading. The White–Black gap
              is largest and persistent, rising from about 0.55 to nearly 0.60
              by 2019, indicating widening disparities despite equity efforts.
            </p>
          </details>
        </figure>
        <p className="text-content text-justify">
          This line trend visualization, which presents trend lines for racial
          and ethnic achievement gaps between 2009 and 2019, offers additional
          insight into how these disparities evolve over time. The White–Asian
          gap remains below zero in both subjects, meaning that Asian students
          outperform White students throughout the decade, with the math gap
          showing a slightly widening trend. In contrast, the White–Hispanic gap
          remains positive but gradually decreases, especially in English,
          suggesting modest improvement in narrowing this disparity, although
          White students still maintain a considerable advantage. The
          White–Black gap, however, is both the largest and the most persistent,
          starting at approximately 0.55 in 2009 and rising to nearly 0.60 by
          2019, showing no meaningful reduction and even slight widening in both
          subjects. This pattern indicates that, despite national equity
          initiatives and increased discourse on educational justice, the
          achievement gap between White and Black students remains the widest
          and most resistant to change, highlighting deep-rooted systemic
          inequities that have not been adequately addressed.
        </p>
        <p className="text-content text-justify">
          Taken together, the visualizations suggest that educational inequality
          in the United States remains both racialized and class-based, with
          math performance showing the greatest disparities. These findings
          align with Watt et al. (2023)’s argument that structural barriers and
          early-life adversity interact to produce enduring inequities
          throughout the educational pipeline. Addressing these issues requires
          a multi-level approach—one that combines trauma-informed educational
          practices, equitable resource distribution, and inclusive curriculum
          design to support historically marginalized students.
        </p>
        <p className="text-content text-justify">
          In summary, the SEDA visualizations not only quantify racial and
          socioeconomic disparities but also provide empirical evidence that
          complements existing psychological and sociological research. They
          underscore the urgent need for systemic reform to reduce the
          cumulative effects of race and class on academic achievement.
        </p>

        <h2 className="section-title">
          Change in Academic Achievement 2009 to 2019
        </h2>
        <figure className="figure">
          {IMAGE_URLS.fig2 ? (
            <img
              className="figure-img"
              src={IMAGE_URLS.fig2}
              alt="Figure 2: Change in Academic Achievement"
            />
          ) : (
            <div className="viz-placeholder" aria-label="Chart placeholder" />
          )}
          <figcaption className="figure-caption">
            Figure 2: Change in Academic Achievement
          </figcaption>
          <details>
            <summary>Show detailed description</summary>
            <p>
              A U.S. map showing states with positive or negative changes in
              academic achievement from 2009 to 2019. Southern and Western
              states are mostly shaded to indicate positive change, while
              Northern and Northeastern states are shaded to indicate negative
              change.
            </p>
          </details>
        </figure>
        <p className="text-content text-justify">
          From this list of those with positive versus negative change, we can
          observe that the states who have a positive state tend to be Southern
          or Western. And, for negative states, we can see that they are usually
          northeast and northern states. For the context of our project, this
          visualization is useful because it informs us where we can make policy
          recommendations. Specifically, we found that Southern and Western
          states seem to have more of a positive change whereas Northeast and
          Northern states have more of a negative change. After further
          research, I found that Southern and Western states could have a
          positive change because these states started lower than the negative
          state counterparts. So, they would have more room to improve. On the
          other hand, Northeast and Northern states appear to already be high
          performing states. So, there could be a “ceiling effect” where these
          states have less room for improvement. As mentioned on the website
          “Education Policy,” the article “
          <a
            href="https://www.newamerica.org/education-policy/topics/school-funding-and-resources/school-funding/funding-disparities/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Funding Disparities
          </a>
          ” states “wealthier states with a high fiscal capacity (typically
          those in the Northeast), have more funding available to spend on
          education than states with more limited resources (typically those in
          the South and the West.” From this article, we can infer that one
          reason for this ceiling effect could be because schools like those in
          the Northeast already have more funding compared to states in the
          South and West. So, this is a relevant trend for our project because
          this indicates that it may be more beneficial for policymakers to do
          further research in policies that specifically work to improve states
          like those in the South and West who would greatly benefit from
          additional financial and educational resources than states in the
          Northeast and North who, when given additional resources, would
          experience diminishing returns.
        </p>

        <h2 className="section-title">
          Male/Female Achievement Gap from 2009 to 2019
        </h2>
        <figure className="figure">
          {IMAGE_URLS.fig3 ? (
            <img
              className="figure-img"
              src={IMAGE_URLS.fig3}
              alt="Figure 3: Male and Female Achievement Gap Over Time (2009-2019)"
            />
          ) : (
            <div
              className="viz-placeholder"
              aria-label="Line chart placeholder"
            />
          )}
          <figcaption className="figure-caption">
            Figure 3: Male and Female Achievement Gap Over Time (2009-2019)
          </figcaption>
          <details>
            <summary>Show detailed description</summary>
            <p>
              A line graph that shows gender achievement gaps in math and
              reading/language arts from 2009 to 2019. The math line hovers near
              zero, indicating almost no gender gap. The reading line hovers
              around -0.25, indicating a slight gender gap.
            </p>
          </details>
        </figure>
        <p className="text-content text-justify">
          From this plot, we can see that there is a very slight gender gap for
          math, which is indicated by the red line that is around 0. On the
          other hand, there appears to be a modest gap in RLA (reading and
          language arts), which is seen in the blue line that hovers at around
          -0.25. This visualization is helpful for our project because it alerts
          us, and policymakers, where the gender gap should primarily be
          addressed. Specifically, since the gender gap for reading and language
          arts appears to be larger than the gender gap for math, it would be
          more beneficial for policymakers to focus their time and energy into
          creating and funding programs that aim to minimize this gap in reading
          and language arts than math. Thus, overall this visualization is
          helpful because it tells us where the gender gap is the most prevalent
          between subjects.
        </p>
        <p className="text-content text-justify">
          To further examine this relationship, we decided to look at it for
        </p>

        <h2 className="section-title">
          Figure 4: Difference between Male and Female Students Grades for Math
          (2009 - 2019)
        </h2>
        <figure className="figure">
          {renderTableau(
            TABLEAU_URLS.fig4,
            "Figure 4: Difference between Male and Female Students Grades for Math (2009 - 2019)",
            "Map placeholder for math"
          )}
          <figcaption className="figure-caption">
            Figure 4: Difference between Male and Female Students Grades for
            Math (2009 - 2019)
          </figcaption>
          <details>
            <summary>Show detailed description of this visualization</summary>
            <p>
              A U.S. map shaded by each state’s average difference between men
              and women for math. Most states have values around zero with only
              slight fluctuations in shading.
            </p>
          </details>
        </figure>

        <h2 className="section-title">
          Figure 5: Difference between Male and Female Students Grades for Math
          (2009 - 2019)
        </h2>
        <figure className="figure">
          {renderTableau(
            TABLEAU_URLS.fig5,
            "Figure 5: Difference between Male and Female Students Grades for Math (2009 - 2019)",
            "Map placeholder for RLA"
          )}
          <figcaption className="figure-caption">
            Figure 5: Difference between Male and Female Students Grades for
            Math (2009 - 2019)
          </figcaption>
          <details>
            <summary>Show detailed description of this visualization</summary>
            <p>
              A U.S. map shaded by each state’s average difference between male
              and female reading/language arts scores. Shading varies more
              widely than in the math map, reflecting larger and more variable
              gender gaps across states.
            </p>
          </details>
        </figure>

        <p className="text-content text-justify">
          From this map in Figure 4 and 5, we can see that there appears to be a
          larger variance in the average education gap between men and women
          amongst states for RLA than math. This can be shown in how the range
          of values for math is (-0.1199 and 0.0944) in Figure 4, creating a
          variance of around 0.011448. On the other hand, the range of values
          for RLA is (-0.4215, -0.1391) in Figure 5, creating a variance of
          around 0.01993. We can observe these ranges using the legend on the
          right of the plot. So, we can see that RLA has more variance.
        </p>
        <p className="text-content text-justify">
          This is a significant observation because it relates to one of the
          findings that we found in the article “
          <a
            href="https://www.rand.org/pubs/research_reports/RRA134-11.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Rise of Standards-Aligned Instructional Materials for U.S. K-12
            Mathematics and English Language Arts Instruction
          </a>
          ” where author Julia H. Kaufman writes, “teachers across the United
          States are more likely to be using instructional materials aligned
          with state standards for mathematics than for ELA, particularly at the
          elementary and middle school levels” (3). Additionally, we can see
          that the average RLA education gap score is around -0.2 whereas the
          average score for math is around the interval (-0.05, 0.05). So, this
          observation, in addition to the previous article, can allow the
          audience to infer that there is a potential association between having
          standardized materials and reducing the education gap between men and
          women across subjects. One potential reason for this association is
          that without standardized teaching, some teachers may rely on more
          subjective approaches to teaching reading and language arts compared
          to subjects that are more standardized like math. For instance, a
          teacher may select a text based on personal preference or emphasize
          discussion styles that favor one gender over another.
        </p>
        <p className="text-content text-justify">
          Thus, we suggest implementing policies that standardize reading and
          language arts across the United States.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/narrative/post-covid">
            Next section → Post Covid Analysis
          </a>
        </div>
      </section>
    </main>
  );
};

export default NarrativePreCovidPage;
