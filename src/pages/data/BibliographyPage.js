import React from 'react';
import '../Pages.css';

const BibliographyPage = () => {
  return (
    <main className="page-container">
      <section className="longform">
        <h1 className="longform-title">Bibliography</h1>

        <p className="text-content" style={{ marginBottom: '1rem' }}>
          Add full citations here in your preferred style (APA/MLA/Chicago). Below are placeholders you can replace.
        </p>

        <div>
          <p className="text-content">[Author Lastname, Firstname]. (Year). Title of article. Journal Name, volume(issue), pages. DOI/URL.</p>
          <p className="text-content">[Author Lastname, Firstname]. (Year). Title of book. Publisher. DOI/URL.</p>
          <p className="text-content">[Organization]. (Year). Dataset title and version. Repository/Publisher. DOI/URL.</p>
        </div>

        <div className="next-section">
          <a className="next-link" href="#/team">Next section → Our Team</a>
        </div>
      </section>
    </main>
  );
};

export default BibliographyPage;
