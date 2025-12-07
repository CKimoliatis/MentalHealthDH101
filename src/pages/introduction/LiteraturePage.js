import React from 'react';
import '../Pages.css';

const LiteraturePage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Literature Review</h1>
        <p className="text-content">
          Before analyzing our datasets, we first began by looking through some research about the causes of education inequality, especially how structural and socioeconomic factors shape students’ learning experiences across different contexts. Our initial readings showed that the shift to online learning during the COVID-19 pandemic revealed how deeply socioeconomic privilege influences educational opportunity. For example, An’s study “The Hidden Costs of Virtual Learning” found that students from affluent families were able to avoid many of the academic challenges associated with remote learning by moving to private schools that reopened earlier, while marginalized students experienced higher dropout risk. This early finding showed us that socioeconomic status does not merely influence outcomes during crises but plays a central role in generating unequal opportunities in the first place.
        </p>
        <figure className="figure">
          <img
            className="figure-img"
            src="images/inequality.png"
            alt="Flowchart illustrating pathways to educational inequality"
          />
          <figcaption className="figure-caption">
            Visualizing the structural gaps that contribute to educational inequality.
          </figcaption>
          <details>
            <summary>Show detailed description of this visualization</summary>
            <p>
              Flowchart showing early socioeconomic factors leading to early
              experiences, then to school contexts affected by a COVID-19 online
              shift, all culminating in educational inequality.
            </p>
          </details>
        </figure>
        <p className="text-content">
          As we continued reviewing the literature, we found that scholars largely agree that the root causes of educational inequality emerge long before students enter high school. Waters et al. (2025) demonstrate that parent education—not income alone—predicts early math and reading achievement through developmental pathways involving maternal sensitivity, cognitive stimulation in the home, and children's working-memory skills. Their findings align with longstanding evidence that socioeconomic status shapes children’s cognitive development from early childhood, providing advantages for higher-SES children years before school entry. Additionally, Watt et al. (2023) show that students of color report higher levels of Adverse Childhood Experiences (ACEs), and that these early traumas predict lower GPAs later in college. This suggests that early-life adversity interacts with social and economic inequality, creating cumulative disadvantages that persist across the educational pipeline. Psychological stress and trauma—often disproportionately experienced by low-income and racial minority students—therefore function as additional mechanisms contributing to unequal academic trajectories.
        </p>
        <p className="text-content">
          Other scholars highlight how school environments and institutional practices further reproduce these early disadvantages. Linnehan et al. (2011) found that high school counselors are more likely to recommend selective colleges for White and high-SES students, even when controlling for academic performance. This implicit bias in educational guidance shapes students’ long-term opportunities and reinforces preexisting inequality. Diette and Oyelere (2014) identify intersectional peer effects, showing that Native-born male and Black students’ achievement declines when the proportion of Limited English (LE) students rises in their schools. This emphasizes how racial, linguistic, and gender dynamics can compound academic disadvantage.
        </p>
        <p className="text-content">
          Across this literature, scholars generally agree that: Educational inequality is rooted in early socioeconomic and developmental conditions, including cognitive stimulation, parenting behaviors, and exposure to adversity. These early disadvantages accumulate over time, shaping academic trajectories before children reach high school. School structures, educator bias, and peer environments further amplify initial inequalities. However, tensions remain in the literature. Some scholars emphasize developmental and home-based mechanisms (Waters et al.), while others focus on institutional or peer-driven dynamics (Linnehan et al.; Diette & Oyelere). Moreover, although many studies document the causes of educational inequality, fewer examine how these mechanisms interact across regions or scale to state-level patterns—leaving an important gap that our SEDA analysis helps address.
        </p>
        <div className="next-section">
          <a className="next-link" href="#/narrative/presenting">Next section → Presenting our work</a>
        </div>
      </section>
    </main>
  );
};

export default LiteraturePage;
