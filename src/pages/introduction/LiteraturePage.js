import React from 'react';
import '../Pages.css';

const LiteraturePage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Literature Review</h1>
        <p className="text-content">
          Before analyzing our datasets, we first began by looking through research about the causes of education inequality, especially how structural and socioeconomic factors shape students' learning experiences across different contexts. Early pandemic work showed that the shift to online learning revealed how deeply socioeconomic privilege influences educational opportunity. For example, An's study "The Hidden Costs of Virtual Learning" found that students from affluent families could avoid many remote-learning challenges by moving to private schools that reopened earlier, while marginalized students faced higher dropout risk. This signaled that socioeconomic status not only buffers crises but also generates unequal opportunities in the first place.
        </p>
        <p className="text-content">
          As we continued reviewing the literature, we found broad agreement that the root causes of educational inequality emerge long before high school. Waters et al. (2025) show that parent education predicts early math and reading achievement through developmental pathways involving maternal sensitivity, cognitive stimulation in the home, and children's working-memory skills. Watt et al. (2023) add that students of color report higher Adverse Childhood Experiences (ACEs), which predict lower GPAs later in college, suggesting early-life adversity interacts with social and economic inequality to create cumulative disadvantages.
        </p>
        <p className="text-content">
          Other scholars highlight how school environments and institutional practices reproduce these early disadvantages. Linnehan et al. (2011) found that high school counselors are more likely to recommend selective colleges for White and high-SES students, even when controlling for academic performance. Diette and Oyelere (2014) identify intersectional peer effects, showing that Native-born male and Black students' achievement declines when the proportion of Limited English students rises, underscoring how racial, linguistic, and gender dynamics can compound disadvantage.
        </p>
        <p className="text-content">
          Across this literature, scholars generally agree that early socioeconomic and developmental conditions shape inequality, compounded by school structures and peer environments. Tensions remain: some emphasize developmental and home-based mechanisms (Waters et al.), while others focus on institutional or peer dynamics (Linnehan et al.; Diette and Oyelere). And while many studies document causes of educational inequality, fewer examine how these mechanisms interact across regions or scale to state-level patterns—gaps our SEDA analysis helps address in the COVID-19 era.
        </p>
        <div className="next-section">
          <a className="next-link" href="#/narrative/presenting">Next section → Presenting our work</a>
        </div>
      </section>
    </main>
  );
};

export default LiteraturePage;
