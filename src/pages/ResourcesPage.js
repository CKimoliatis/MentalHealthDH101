import React from 'react';
import './Pages.css';

const ResourcesPage = () => {
  const resources = [
    {
      title: 'Resource Title One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie.'
    },
    {
      title: 'Resource Title Two',
      description: 'Enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.'
    },
    {
      title: 'Resource Title Three',
      description: 'Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim.'
    },
    {
      title: 'Resource Title Four',
      description: 'Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.'
    },
  ];

  return (
    <main className="page-container">
      <div className="content-card">
        <h1 className="page-title">Helpful Resources</h1>
        
        <p className="text-content" style={{ marginBottom: '2.5rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam.
        </p>

        <div>
          {resources.map((resource, index) => (
            <div key={index} className="resource-item">
              <h2 className="resource-title">
                {resource.title}
              </h2>
              <p className="resource-description">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ResourcesPage;