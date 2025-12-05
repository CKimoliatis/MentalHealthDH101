import React from 'react';
import '../Pages.css';

const BackgroundPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Background Information</h1>
        <p className="text-content text-justify">
          Where were you when COVID-19 lockdown policies were first implemented? In 2020, cities around the world applied quarantine procedures in attempts to combat the deadly Coronavirus. Many experiencing this shutdown in America experienced similar consequences: limited social patterns, amplified anxiety, and a dramatic shift to online communication and work platforms. However, one group’s quarantine experience has yet to be spotlighted – the experience of students.
        </p>
        <figure className="figure figure-float-right">
          <img
            className="figure-img"
            src="images/backgroundinfo.png"
            alt="Students learning online during the pandemic"
          />
          <figcaption className="figure-caption">
            Transition to online learning during COVID-19.
          </figcaption>
          <details>
            <summary>Show detailed description</summary>
            <p>
              Student works from a home desk using a laptop to attend
              virtual classes, illustrating the rapid shift from in-person
              schooling to remote instruction during the COVID-19 lockdowns.
            </p>
          </details>
        </figure>
        <p className="text-content text-justify">
          Although schools nationwide shifted to online synchronous classes, individual student experiences varied greatly depending on their previous backgrounds. For instance, if someone came from a wealthier socioeconomic status, they would have a much more seamless transition to online learning than someone who does not have the financial means to pivot as easily. Thus, in this project, we aim to first identify the current gaps in American educational opportunity and second assess how switching to online learning during COVID-19 has impacted these preexisting gaps.
        </p>
        <div className="clear-float" />
        <p className="text-content text-justify">
          To answer this question, we decided to use two datasets from the Stanford Education Data Archive (SEDA): the “Administrative District Annual Subgroup 2024.2” dataset and the “Geographic District Long 5.0” dataset. Both datasets were developed by the Educational Opportunity Project (EOP) at Stanford University. These datasets were supported by a grant from the Gates Foundation and use source data from Zelma, NCES, and the National Assessment Governing Board. The first dataset provides summaries of average math and reading scores across student subgroups defined by gender, race, and economic status. The dataset covers the years 2009 through 2024, allowing analysis of educational trends during and after the COVID-19 recovery period. The second dataset focuses on the earlier period 2009–2019 and reports test score data by district, grade, year, and subject (Math or English/Language Arts). Each record represents a geographic district, including average academic performance and achievement gaps disaggregated by year, grade, and subject, allowing researchers to examine patterns of educational inequality.
        </p>
        <p className="text-content text-justify">
          We decided to primarily use these two datasets because they provide a powerful macro-level framework for understanding educational inequality. By assessing these datasets, we hope to understand how one’s background (race, gender, socioeconomic status) can impact educational opportunity.
        </p>
        <p className="text-content text-justify">
          Through our project, we hope to help educational stakeholders make more educated policy reforms. Specifically, suppose we observe that the pandemic does not impact racial, gender, or socioeconomic educational gaps that already exist. In that case, we can advise policymakers to allocate more financial resources and time to policies that serve to resolve these fundamental gaps first, instead of focusing on allocating resources that help bring a smoother transition to future online learning shifts. For instance, this could be providing more money for school districts to buy new textbooks so that they can update their educational curriculum instead of just providing more laptops. Or, if we end up discovering that COVID-19 does exacerbate some of the demographic differences we already see in education, we can advise policy reformers to focus on initiatives that ease online learning. For instance, we can advise policymakers to fund classes that show teachers how they can continue to keep students engaged when they transition to an online setting. Thus, our project serves to investigate where demographic differences in education exist and if these differences are magnified by the pandemic. From these results, we aim to minimize these educational gaps both from a general perspective and a specific lens of global crises like the pandemic.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/introduction/timeline">Next section → Timeline</a>
        </div>
      </section>
    </main>
  );
};

export default BackgroundPage;
