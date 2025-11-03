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
          <h2 className="section-title">Data Source</h2>
          <p className="text-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
          </p>
          <p className="text-content">
            Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
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