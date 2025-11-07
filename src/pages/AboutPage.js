import React from 'react';
import './Pages.css';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Katherine Huynh',
      role: 'Project Manager',
      description: 'Katherine Huynh (she/her) is a fourth year undergraduate student at UCLA studying Statistics and Data Science. She is passionate about pursuing a career that allows her to apply the data science skills she learned in college to generate real world impact for businesses. Outside of academics, she was previously President of UCLA’s largest data science organization Data Resolutions and a data science consultant for various LA startups. Beyond data science, she is also currently a Creative Strategist at UCLA’s student run marketing agency Bruin Advertising and Marketing Team. She can be typically found exploring cafes in LA, sewing hand-embroidery, or hanging out with friends. As project manager, Katherine took initiative to define this project’s scope and direction. She organized meetings, created agendas, and managed assignment compilation and editing. She has also worked on synthesizing literature and data while creating various data visualizations to form conclusions.',
      image: 'images/kat.jpeg',
      email: 'member1@example.com',
      linkedin: 'https://linkedin.com/in/katherineghuynh/'
    },
    {
      name: 'Chris Kimoliatis',
      role: 'Web Specialist',
      description: 'Chris Kimoliatis (he/him) is a fourth-year Computer Science student at UCLA focused on building reliable, user-friendly software. As a web developer, he turns complex team data into clear, interactive dashboards, bringing charts and insights to the forefront on the web.',
      image: 'images/chris.jpeg',
      email: 'kimoliatis01@g.ucla.edu',
      linkedin: 'https://linkedin.com/in/ckimoliatis'
    },
    {
      name: 'Alan Ruiz',
      role: 'Data Specialist',
      description: 'Alan Ruiz (he/him) is a second-year Statistics and Data Science major at UCLA. He is actively applying the data analysis skills learned in courses to his career pursuit as a sports analyst. Outside of class, you can find him researching and recording videos for his sports analysis YouTube channel “All Things Dodgers”, contributing to projects conducted by UCLA’s DataRes and Bruin Sports Analytics organizations, and supporting the local community with the UCLA Community Programs Office. As Data Specialist, Alan led the team in dataset analysis and facilitated group discussions that impacted the project’s direction. He also organized task delegation throughout the team and conducted comprehensive academic research to expand the project’s context.',
      image: 'images/alan.jpeg',
      email: 'member1@example.com',
      linkedin: 'https://linkedin.com/in/ckimoliatis'
    },
    {
      name: 'Kimya Jin',
      role: 'Data Specialist',
      description: 'Jingya(Kimya) Jin is a senior undergraduate student at UCLA, majoring in Statistics and Data Science. She has a strong interest in data analytics, mathematics, finance, and quantitative research, and is proficient in R, Python, and Tableau. As a Data Visualization Analyst, Kimya utilizes Tableau to design insightful dashboards and geographic maps that uncover complex patterns and regional trends. She integrates multiple data sources to analyze both historical and real-world factors behind research topics, combining analytical precision with storytelling clarity. Outside of academics, she enjoys traveling, attending concerts, and exploring new cultures and experiences that inspire creativity and broaden her perspective.',
      image: 'images/kimya.jpeg',
      email: 'member1@example.com',
      linkedin: 'https://linkedin.com/in/ckimoliatis'
    },
    {
      name: 'Tsz Ching Cheng',
      role: 'Content specialist',
      description: 'Tsz Ching Cheng (she/her) is a fourth-year undergraduate student at UCLA majoring in Statistics and Data Science. She is passionate about using data to tell meaningful stories and creating engaging visual narratives that connect analytical insights with real-world impact. As the Content Developer, Tsz Ching oversaw the authoring of the site’s main narrative and ensured that the data visualizations and maps integrated seamlessly with the written content. Outside of academics, she enjoys photography, exploring local cafes, and discovering creative inspiration through art and film.',
      image: 'images/tsz.jpeg',
      email: 'member1@example.com',
      linkedin: 'https://linkedin.com/in/ckimoliatis'
    },
    {
      name: 'Sooyeon Byun',
      role: 'Content specialist',
      description: 'Sooyeon Byun (she/her) is a fourth-year undergraduate student at UCLA majoring in Statistics and Data Science. She is passionate about how data can reveal patterns in human behavior and social systems. For this project, Sooyeon analyzed trends within the Stanford Education Data Archive (SEDA) datasets, while also contributing to the data critique by evaluating the dataset’s structure and potential biases. She also worked on visualizing and interpreting data to support the team’s main research narrative. Beyond academics, she enjoys traveling, photography, and making handmade charms.',
      image: 'images/sooyeon.jpeg',
      email: 'member1@example.com',
      linkedin: 'https://linkedin.com/in/ckimoliatis'
    }
  ];

  return (
    <main className="page-container">
      <div className="content-card">
        <h1 className="page-title">Meet the Team</h1>
        
        <p className="text-content" style={{ marginBottom: '3rem' }}>
          Our team of six worked together over Fall Quarter 2025 to complete this digital humanities project, culminating in this WordPress website. All members contributed equally to each part of the project, with roles assigned to allow for one individual to coordinate work and ensure consistent quality of their designated section.
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