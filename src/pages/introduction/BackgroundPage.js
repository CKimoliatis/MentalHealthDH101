import React from 'react';
import '../Pages.css';

const BackgroundPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Background Information</h1>
        <p className="text-content text-justify">
          For our research project, we aim to examine how education outcomes differ across multiple marginalized communities. Specifically, we investigate performance disparities in mathematics and reading among elementary and middle school students for different racial, socioeconomic, and gender groups.
        </p>
        <p className="text-content text-justify">
          In addition, we seek to understand how these communities were affected by major world crises, specifically the COVID-19 pandemic and its shift to online learning. Through this lens, we hope to determine whether such disruptions widened existing educational gaps. If so, how can we recommend policies that ensure stability over periods of world crises? And if not, how can we recommend policies that resolve differences that are present regardless of whether world crises are present or not?
        </p>
        <p className="text-content text-justify">
          Through our project, we hope to help educational stakeholders better tailor policies that minimize this gap in education.
        </p>

        <div className="next-section">
          <a className="next-link" href="#/introduction/timeline">Next section → Timeline</a>
        </div>
      </section>
    </main>
  );
};

export default BackgroundPage;
