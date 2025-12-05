import React from 'react';
import '../Pages.css';

const AcknowledgementsPage = () => {
  return (
    <main className="page-container">
      <section className="longform longform-wide">
        <h1 className="longform-title">Acknowledgements</h1>
        <p className="text-content">
          We would like to thank our TA, Pietro Santachiara, for all his helpful feedback and guidance through working with our datasets. We would also like to thank Dr. Wendy Perla Kurtz for all the helpful resources she provided in class, such as how to use softwares like WordPress, Tableau, Timeline JS and how to think like true researchers.
        </p>
        <figure className="figure">
          <img
            className="figure-img"
            src="/images/wendy_perla.png"
            alt="Portrait of Dr. Wendy Perla Kurtz"
          />
          <figcaption className="figure-caption">Dr. Wendy Perla Kurtz</figcaption>
        </figure>
        <figure className="figure">
          <img
            className="figure-img"
            src="/images/Pietro_Headshot.png"
            alt="Portrait of TA Pietro Santachiara"
          />
          <figcaption className="figure-caption">TA Pietro Santachiara</figcaption>
        </figure>

        <div className="next-section">
          <a className="next-link" href="#/">Return to Home →</a>
        </div>
      </section>
    </main>
  );
};

export default AcknowledgementsPage;
