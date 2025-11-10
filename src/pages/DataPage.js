import React, { useState } from 'react';
import StressChart from '../components/charts/StressChart';
import AnxietyChart from '../components/charts/AnxietyChart';
import ImpactChart from '../components/charts/ImpactChart';
import SupportChart from '../components/charts/SupportChart';
import './Pages.css';
import './DataPage.css';

const DataPage = () => {
  const [activeChart, setActiveChart] = useState('stress');

  const chartCaptions = {
    stress: 'Average reported stress levels by year.',
    anxiety: 'Approximate changes in anxiety cases across periods.',
    impact: 'Relative impact across academic, social, and health domains.',
    support: 'How students use different support resources.',
  };

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

          <details className="accordion" open>
            <summary className="accordion-summary subsection-title">Datasets Used</summary>
            <div className="accordion-content">
              <ul className="research-list">
                <li className="research-item">Administrative District Annual Subgroup 2024.2: summaries of average math and reading scores across subgroups (gender, race, economic status), spanning 2009–2024 to capture trends through the COVID-19 recovery period.</li>
                <li className="research-item">Geographic District Long 5.0: district-level test scores by year, grade, and subject (Math or ELA) for 2009–2019, including average performance and achievement gaps.</li>
                <li className="research-item">Developed by Stanford’s Educational Opportunity Project (EOP); sources include NCES and the National Assessment Governing Board, with support from the Gates Foundation.</li>
              </ul>
            </div>
          </details>

          <details className="accordion">
            <summary className="accordion-summary subsection-title">What We Can Learn</summary>
            <div className="accordion-content">
              <ul className="research-list">
                <li className="research-item">Track achievement gaps (e.g., Black–White, low–high income, male–female) using subgroup summaries.</li>
                <li className="research-item">Observe historical trends from 2009–2024 to see whether gaps widen, narrow, or hold steady.</li>
                <li className="research-item">Compare geographic inequality across districts and regions to spot unusually small or large gaps.</li>
              </ul>
            </div>
          </details>

          <details className="accordion">
            <summary className="accordion-summary subsection-title">What’s Missing from the Data</summary>
            <div className="accordion-content">
              <ul className="research-list">
                <li className="research-item">No classroom-level experiences or voices of students, families, and teachers.</li>
                <li className="research-item">Limited context on resources (funding, teacher quality, curriculum, materials, technology access).</li>
                <li className="research-item">Few community factors (parental education, detailed income dynamics, emotional well‑being).</li>
              </ul>
            </div>
          </details>

          <details className="accordion">
            <summary className="accordion-summary subsection-title">How the Data Frames the Problem</summary>
            <div className="accordion-content">
              <ul className="research-list">
                <li className="research-item">Emphasizes measurable gaps, reducing complex realities to aggregates and categories.</li>
                <li className="research-item">Risks overlooking intersectionality and the social, cultural, and emotional context behind scores.</li>
              </ul>
            </div>
          </details>

          <details className="accordion">
            <summary className="accordion-summary subsection-title">Interpreting with Care</summary>
            <div className="accordion-content">
              <ul className="research-list">
                <li className="research-item">Use quantitative patterns as a starting point—not a full explanation of <em>why</em>.</li>
                <li className="research-item">Pair results with local context, policy history, and lived experiences.</li>
                <li className="research-item">Avoid causal claims without additional evidence or mixed‑methods support.</li>
              </ul>
            </div>
          </details>
        </section>
      </div>

      <div className="content-card">
        <section>
          <h2 className="section-title">Methodology</h2>
          <ul className="research-list">
            <li className="research-item">Select districts and subgroups from the SEDA tables (2009–2024; 2009–2019 for district‑long).</li>
            <li className="research-item">Compute achievement gaps (e.g., Black–White, low–high income, male–female) from subgroup summaries.</li>
            <li className="research-item">Track trends across years and regions; highlight the COVID‑19 disruption and recovery window.</li>
            <li className="research-item">Visualize patterns with lines and bars; include notes on uncertainty where available.</li>
            <li className="research-item">Document cleaning steps, suppressed/missing values, and any data transformations.</li>
          </ul>
        </section>
      </div>

      <div className="content-card">
        <section>
          <h2 className="section-title">Limitations</h2>
          <ul className="research-list">
            <li className="research-item">Aggregated test scores are proxies for learning and opportunity, not full experiences.</li>
            <li className="research-item">Assessment changes and state differences can affect comparability over time and place.</li>
            <li className="research-item">Important context (funding, staffing, curriculum, home environment) is not included.</li>
            <li className="research-item">Suppressed or missing values may bias patterns if not handled carefully.</li>
            <li className="research-item">Ecological fallacy risk: district averages may not describe individual students.</li>
          </ul>
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
            <p className="chart-caption">{chartCaptions[activeChart]}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DataPage;
