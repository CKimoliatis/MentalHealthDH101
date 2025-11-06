import React from 'react';
import './Pages.css';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Katherine Huynh',
      role: 'Project Manager',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ligula massa.',
      image: 'images/kat.png',
      email: 'member1@example.com',
      linkedin: 'https://linkedin.com/in/katherineghuynh/'
    },
    {
      name: 'Chris Kimoliatis',
      role: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ligula massa.',
      image: 'images/chris.jpeg',
      email: 'member1@example.com',
      linkedin: 'https://linkedin.com/in/ckimoliatis'
    },
    ...Array(4).fill(null).map((_, i) => ({
      name: `Team Member ${i + 2}`,
      role: 'Project Role',
      description: 'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi.',
      image: null,
      email: `member${i + 2}@example.com`,
      linkedin: `https://linkedin.com/in/member${i + 2}`
    }))
  ];

  return (
    <main className="page-container">
      <div className="content-card">
        <h1 className="page-title">Meet the Team</h1>
        
        <p className="text-content" style={{ marginBottom: '3rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              {member.image ? (
                <img 
                  className="team-photo" 
                  src={member.image} 
                  alt={member.name} 
                />
              ) : (
                <div className="team-photo-placeholder">
                  PFP
                </div>
              )}
              <h2 className="team-name">{member.name}</h2>
              <p className="team-role">{member.role}</p>
              <p className="team-description">{member.description}</p>
              <div className="team-links">
                <a href={`mailto:${member.email}`} className="team-link">
                  ✉️
                </a>
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="team-link"
                >
                  💼
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutPage;