import React, { useState } from 'react';
import StressChart from '../components/charts/StressChart';
import AnxietyChart from '../components/charts/AnxietyChart';
import ImpactChart from '../components/charts/ImpactChart';
import SupportChart from '../components/charts/SupportChart';
import './Pages.css';
import './DataPage.css';

const DataPage = () => {
  const [activeChart, setActiveChart] = useState('stress');

  const chartButtons = [
    { id: 'stress', label: 'Stress Trends', icon: '📊' },
    { id: 'anxiety', label: 'Anxiety Cases', icon: '📈' },
    { id: 'impact', label: 'Impact Areas', icon: '🎯' },
    { id: 'support', label: 'Support Usage', icon: '🤝' },
  ];

  return (
    <main className="page-container">
      <h1 className="page-title">Our Data</h1>

      <div className="content-card">
        <section>
          <h2 className="section-title">Data Critique</h2>
          <p className="text-content">
            For our project, we chose to work with two datasets from the Stanford Education Data Archive (SEDA):  the “Administrative District Annual Subgroup 2024.2” dataset and the “Geographic District Long 5.0” dataset. Both datasets were developed by the Educational Opportunity Project (EOP) at Stanford University. Additionally, we saw that this project is supported by a grant from the Gates Foundation and uses source data from Zelma, NCES, along with the National Assessment Governing Board. The first dataset, “Administrative District Annual Subgroup 2024.2,” provides summaries of average math and reading scores across student subgroups defined by gender, race, and economic status. The dataset covers the years 2009 through 2024, allowing analysis of educational trends during and after the COVID-19 recovery period. The second dataset, “Geographic District Long 5.0,” focuses on the earlier period 2009–2019 and reports test score data by district, grade, year, and subject (Math or English/Language Arts). Each record represents a geographic district, including average academic performance and achievement gaps disaggregated by year, grade, and subject, allowing researchers to examine patterns of educational inequality.
          </p>
          <p className="text-content">
            The SEDA dataset is separated into variables that allow us to compare student performance. First, this data is designed to track academic gaps. We can calculate the difference between average scores for Black and white students, for students from low-income families and higher-income families, and for male and female students. Second, since the data contains a period of data from 2009 to 2024, it shows historical trends as well. We can analyze and see if these gaps have been changing or staying the same over the years. Finally, the separation by school district illuminates geographic inequality. We can identify academic gaps across the entire country to see if they vary significantly by region. This allows us to identify where gaps are unusually small or where they are abnormally large.
          </p>
          <p className="text-content">
            The SEDA dataset provides a detailed quantitative view of educational performance by district, year, and subgroup, such as race, gender, and socioeconomic status, but it also leaves out a great deal of important context that shapes why these patterns exist. It focuses only on average test scores, so it does not include individual student data, classroom experiences, or the voices of teachers and families. The dataset also lacks information about school funding, teacher quality, curriculum design, and learning resources. All of these variables have a direct impact on students’ academic performance. It does not show home and community factors such as parental education, family income levels beyond subgroup averages, access to the internet or technology, and emotional well-being. Because of this, the data only captures what is easily measurable, not what is deeply meaningful.
          </p>
          <p className="text-content">
            The structure of the dataset reflects a particular way of thinking about education, which is an ideology of quantification. It treats learning, opportunity, and inequality as things that can be summarized through numbers and categories. By dividing data strictly by demographics and test results, it assumes that academic inequality can be fully represented through measurable “gaps.” This approach simplifies human experiences into statistics and ignores the social, cultural, and emotional complexities behind those numbers. It also overlooks how race, class, and gender intersect in real life to shape opportunities differently for each student.
          </p>
          <p className="text-content">
            If these datasets were our only sources, we could describe where educational gaps exist and how they change over time, but not why they occur or how they might be resolved. The broader social forces, such as policy choices, historical inequities, and cultural contexts, that underlie the data would remain invisible. Therefore, while the SEDA datasets provide a powerful macro-level framework for understanding educational inequality, their insights must be interpreted within the larger context of lived experiences and systemic structures.
          </p>
        </section>
      </div>

      <div className="content-card">
        <section>
          <h2 className="section-title">Methodology</h2>
          <p className="text-content">
            Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          </p>
          <p className="text-content">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam.
          </p>
        </section>
      </div>

      <div className="content-card">
        <section>
          <h2 className="section-title">Limitations</h2>
          <p className="text-content">
            Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaEos. Curabitur sodales ligula in libero.
          </p>
        </section>
      </div>

      {/* Interactive Charts Section */}
      <div className="content-card">
        <section>
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Visualizing the Data
          </h2>

          {/* Chart Selector Buttons */}
          <div className="chart-selector">
            {chartButtons.map((chart) => (
              <button
                key={chart.id}
                onClick={() => setActiveChart(chart.id)}
                className={`chart-button ${activeChart === chart.id ? 'chart-button-active' : ''}`}
              >
                <span className="chart-icon">{chart.icon}</span>
                {chart.label}
              </button>
            ))}
          </div>

          {/* Chart Display */}
          <div className="chart-container">
            {activeChart === 'stress' && <StressChart />}
            {activeChart === 'anxiety' && <AnxietyChart />}
            {activeChart === 'impact' && <ImpactChart />}
            {activeChart === 'support' && <SupportChart />}
          </div>
        </section>
      </div>
    </main>
  );
};

export default DataPage;