import React from 'react'
import './ProjectBanner.css';

const ProjectBanner = ({
  placement,
  title,
  labels,
  description,
  githubLink,
  deployLink,
}) => {
  return (
    <div className='project-banner-container'>
      <div className={'project-card-container ' + placement}>
        <h1 className='project-heading'>{title}</h1>
        <div className='project-labels-container'>
          {labels.map((label, i) => {
            let colour = '#FFD774';
            if (label['id'] === 1) {
              colour = '#B1E3FF';
            } else if (label['id'] === 2) {
              colour = '#E5E5E5';
            }

            return (
              <div
                key={i}
                className='project-label'
                style={{ backgroundColor: colour }}
              >
                {label['title']}
              </div>
            );
          })}
        </div>
        <p>{description}</p>
        <a
          href={githubLink}
          target='_blank'
          rel='noreferrer noopener'
          style={{ textDecoration: 'none' }}
        >
          Github
        </a>
        {deployLink !== '' && (
          <a
            href={githubLink}
            target='_blank'
            rel='noreferrer noopener'
            style={{ textDecoration: 'none' }}
          >
            Deploy
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBanner;
