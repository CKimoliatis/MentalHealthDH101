import React from 'react';
import '../Pages.css';

const LiteraturePage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Literature Review</h1>
        <p className="text-content">
          Before analyzing SEDA, we reviewed how structural and socio-economic factors shape learning opportunities. Early pandemic research (e.g., An, “The Hidden Costs of Virtual Learning”) showed affluent students could shift to private schools and dodge the worst remote-learning disruptions, while marginalized students faced higher dropout risk—underscoring how privilege buffers crises.
        </p>
        <p className="text-content">
          Developmental studies (Waters et al., 2025) emphasize that parent education and early home environments drive math and reading gains through maternal sensitivity, cognitive stimulation, and working-memory skills—advantages that start long before high school. Watt et al. (2023) add that students of color report higher Adverse Childhood Experiences, which predict lower GPAs, linking early trauma to later academic outcomes.
        </p>
        <p className="text-content">
          School contexts can amplify these early gaps. Linnehan et al. (2011) find counselors more often steer White and high-SES students toward selective colleges, even controlling for performance. Diette and Oyelere (2014) show intersectional peer effects: Native-born male and Black students’ achievement declines as the proportion of LE students rises, revealing how racial, linguistic, and gender dynamics compound disadvantage.
        </p>
        <p className="text-content">
          Across the literature, consensus points to early socio-economic and developmental roots of inequality, compounded by school structures and peer environments. Gaps remain around how these mechanisms interact across regions and scale to state-level patterns—questions our SEDA analysis addresses for the COVID-19 era.
        </p>
        <div className="next-section">
          <a className="next-link" href="#/narrative/presenting">Next section → Presenting our work</a>
        </div>
      </section>
    </main>
  );
};

export default LiteraturePage;
