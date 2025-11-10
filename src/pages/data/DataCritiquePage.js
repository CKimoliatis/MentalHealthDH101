import React from 'react';
import '../Pages.css';

const DataCritiquePage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Data Critique</h1>

        <p className="text-content">
          For our project, we chose to work with two datasets from the Stanford Education Data Archive (SEDA): the “Administrative District Annual Subgroup 2024.2” dataset and the “Geographic District Long 5.0” dataset. Both datasets were developed by the Educational Opportunity Project (EOP) at Stanford University. Additionally, we saw that this project is supported by a grant from the Gates Foundation and uses source data from Zelma, NCES, along with the National Assessment Governing Board. The first dataset, “Administrative District Annual Subgroup 2024.2,” provides summaries of average math and reading scores across student subgroups defined by gender, race, and economic status. The dataset covers the years 2009 through 2024, allowing analysis of educational trends during and after the COVID-19 recovery period. The second dataset, “Geographic District Long 5.0,” focuses on the earlier period 2009–2019 and reports test score data by district, grade, year, and subject (Math or English/Language Arts). Each record represents a geographic district, including average academic performance and achievement gaps disaggregated by year, grade, and subject, allowing researchers to examine patterns of educational inequality.
        </p>

        <p className="text-content">
          The SEDA dataset is separated into variables that allow us to compare student performance. First, this data is designed to track academic gaps. We can calculate the difference between average scores for Black and white students, for students from low-income families and higher-income families, and for male and female students. Second, since the data contains a period of data from 2009 to 2024, it shows historical trends as well. We can analyze and see if these gaps have been changing or staying the same over the years. Finally, the separation by school district illuminates geographic inequality. We can identify academic gaps across the entire country to see if they vary significantly by region. This allows us to identify where gaps are unusually small or where they are abnormally large.
        </p>

        <h2 className="section-title">Limitations</h2>
        <ul className="research-list">
          <li className="research-item">Aggregated test scores are proxies for learning and opportunity, not full experiences.</li>
          <li className="research-item">Assessment changes and state differences can affect comparability over time and place.</li>
          <li className="research-item">Important context (funding, staffing, curriculum, home environment) is not included.</li>
          <li className="research-item">Suppressed or missing values may bias patterns if not handled carefully.</li>
          <li className="research-item">Ecological fallacy risk: district averages may not describe individual students.</li>
        </ul>

        <h2 className="section-title">Biases and Ontologies</h2>
        <p className="text-content">
          The structure of the dataset reflects a particular way of thinking about education, which is an ideology of quantification. It treats learning, opportunity, and inequality as things that can be summarized through numbers and categories. By dividing data strictly by demographics and test results, it assumes that academic inequality can be fully represented through measurable “gaps.” This approach simplifies human experiences into statistics and ignores the social, cultural, and emotional complexities behind those numbers. It also overlooks how race, class, and gender intersect in real life to shape opportunities differently for each student.
        </p>
        <p className="text-content">
          If these datasets were our only sources, we could describe where educational gaps exist and how they change over time, but not why they occur or how they might be resolved. The broader social forces, such as policy choices, historical inequities, and cultural contexts, that underlie the data would remain invisible. Therefore, while the SEDA datasets provide a powerful macro-level framework for understanding educational inequality, their insights must be interpreted within the larger context of lived experiences and systemic structures.
        </p>
      </section>
    </main>
  );
};

export default DataCritiquePage;

