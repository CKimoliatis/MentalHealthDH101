import React from 'react';
import './Pages.css';

const NarrativePage = () => {
  return (
    <main className="page-container">
      <section className="hero-section">
        <h1 className="hero-title">The Silent Epidemic</h1>
        <p className="hero-description">
          Analyzing the profound impact of the COVID-19 pandemic on student mental health and the future of education.
        </p>
      </section>

      <section className="content-card">
        <h2 className="section-title">About This Project</h2>
        <p className="text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
        </p>
        <p className="text-content">
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
        </p>
      </section>

      <section className="content-card">
        <h2 className="section-title">Our Research Questions</h2>
        <ul className="research-list">
          <li className="research-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet est et sapien ullamcorper pharetra?
          </li>
          <li className="research-item">
            Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor?
          </li>
          <li className="research-item">
            Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi?
          </li>
        </ul>
      </section>
    </main>
  );
};

export default NarrativePage;