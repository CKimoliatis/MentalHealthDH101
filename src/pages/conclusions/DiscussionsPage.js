import React from 'react';
import '../Pages.css';

const DiscussionsPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Discussions</h1>
        <p className="text-content text-justify">
          Discussion
          Overall, our findings suggest that COVID-19 did not create new inequalities in education, but it made existing gaps worse. Even before the pandemic, economically disadvantaged students and many Black, Hispanic, and Native American students were already scoring lower than their peers. After COVID-19, these same groups often showed larger drops in scores, especially in reading. In contrast, some groups, such as Asian students in math, stayed more stable or even improved. This pattern suggests that families’ resources, access to technology, and school support strongly shaped how much students could continue learning during remote or disrupted schooling.
        </p>
        <p className="text-content text-justify">
          We also saw that not all subjects were affected in the same way. Reading scores dropped more than math across most groups. This may be because reading is closely tied to daily routines at home, quiet spaces, and consistent practice, which were harder to maintain during the pandemic. Our maps and charts also showed differences across regions: some states or districts recovered more quickly, while others are still behind. This tells us that educational opportunity is not only about who the students are, but also about where they live and what types of resources their schools and communities can provide.
        </p>
        <p className="text-content text-justify">
          These results have two main implications. First, recovery plans should be targeted rather than “one-size-fits-all.” Districts serving historically marginalized students likely need extra support in reading, digital access, and teacher training to close the widened gaps. Second, our analysis is based on district-level test scores, so we cannot see individual student experiences or within-school differences. Future work could combine large-scale data with interviews or school case studies to better understand how students actually navigated online learning and which strategies helped them the most.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/data-critique">Next section → Data Critique</a>
        </div>
      </section>
    </main>
  );
};

export default DiscussionsPage;
