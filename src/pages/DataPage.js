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
            For our research project, we chose to investigate the Kaggle dataset “COVID-19 and its Impact on Students.” 	This data comes from a cross-sectional survey with a sample size of 1182 students from different age groups across different educational institutions in the Delhi National Region (NCR). Specifically, a web-based survey was organized through Google’s various platforms from July 13 to July 18, 2020. These questionnaires had four main groups. First, the participants were asked about his or her demographic information, such as age and hometown. Then, the participants were asked about how their daily learning routine changed when they had to shift online during the pandemic, such as the average amount of time they spent studying online, what platform they used to study online, and how much time they spent studying on their own. They were also asked to assess their own experience learning online by rating their own satisfaction. Lastly, they were asked to assess how the pandemic has affected their lifestyle habits, such as how much they slept on average, how much their weight changed, how much time they spent exercising, how many meals they consumed, how they dealt with stress, how their family dynamics changed, etc. The study mentioned that the following survey was done so that participants were properly informed and consented to the idea of data being collected on their experiences of learning during the pandemic. They also mentioned that no personal information was collected.           </p>
          <p className="text-content">
            The data was originally sourced from a research paper titled “COVID-19 and its impact on education, social life and mental health of students: A survey” from the journal ScienceDirect. This research study was completed by the three researchers Kunal Chaturvedi, Dinesh Kumar Vishwakarma, and Nidhi Singh. This research was funded by the Biometric Research Laboratory in the Department of Information Technology of Delhi Technological University. 
          </p>
          <p className="text-content">
            Some information that was left out of the spreadsheet is if the participants were fully fluent in the language that the survey was taken place in and if they were fully literate. These two details would be important to note in our data collection because it would be some sort of indicator that ensures that the participants actually accurately answered the responses so that it followed their actual experiences. Additionally, it would also disclose to the readers the literacy of Delhi’s children so that they would have a more accurate picture of what the context of this study was taken place in. Without this information, it is also possible to make a false causal relationship that the pandemic in itself caused students to perform worse academically when in reality there is a confounding variable of one’s literacy level. 
          </p>
          <p className="text-content">
            The way this dataset is divided shows a certain perspective on how to understand students’ experiences during the pandemic. The data separates questions into groups such as demographics, online learning habits, satisfaction levels, and lifestyle changes. This structure assumes that these are the main factors that explain how students were affected by COVID-19. It also reflects an idea that learning, lifestyle, and emotions can be measured and compared using numbers like “hours of study” or “amount of sleep.” While this makes the data easier to analyze, it simplifies human experiences into numbers and might leave out deeper emotional or social meanings behind them.
          </p>
          <p className="text-content">
            If this dataset was the only data source we used, we would overlook many important details. For example, it does not show how students actually felt about online learning, how their motivation changed, or what kinds of challenges they faced at home. It also overlooks socioeconomic, linguistic, and cultural contexts. For example, differences in access to technology, home environment, or support systems. Furthermore, it lacks detail about students’ literacy levels or language fluency, which could influence how accurately they responded to the survey. Another missing element is how students’ academic performance changed during the pandemic, which would be essential to understand the real impact on learning outcomes. Without this kind of information, the data gives a limited picture of students’ real situations, and it might lead to conclusions that do not fully explain why students’ experiences differed during the pandemic.
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