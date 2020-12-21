import React from 'react'
import './ProjectCard.css';

const ProjectCard = ({ img, title, description, labels, pageURL, github, deploy }) => {
  return (
    <div className='card-outer-container'>
      <a href={pageURL}>
        <div className='card-inner-container'>
          <img class='card-img' src={process.env.PUBLIC_URL + img} alt='' />
          <div className='card-content'>
            <div className='card-labels-container'>
              {labels.map((label, i) => {
                return (
                  <div
                    key={i}
                    className='card-label'
                    style={{ backgroundColor: label.colour }}
                  >
                    {label.title}
                  </div>
                );
              })}
            </div>
            <h3 className='card-heading'>{title}</h3>
            <p className='card-description'>{description}</p>
            <div className='card-links-container'>
              <div className='card-links'>
                {github !== '' && (
                  <a href={github} target='_blank' rel='noreferrer noopener'>
                    <div className='link-item'>Github</div>
                  </a>
                )}
                {deploy !== '' && (
                  <a href={deploy} target='_blank' rel='noreferrer noopener'>
                    <div className='link-item'>Deploy</div>
                  </a>
                )}
              </div>
              <div className='link-item'>
                Read More <kbd>→</kbd>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
