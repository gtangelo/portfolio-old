import React from 'react'
import './Card.css'

const Card = ({ imageUrl, title, description, labels, link, isHorizontal, github, deploy }) => {
  return (
    <div
      className={isHorizontal ? 'horizontal-card-container' : 'card-container'}
    >
      <div
        className={isHorizontal ? 'horizontal-card-image' : 'card-image'}
        style={{ backgroundImage: 'url("' + imageUrl + '")' }}
      />
      <div
        className={isHorizontal ? 'horizontal-card-content' : 'card-content'}
      >
        <div className='card-labels-container'>
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
                className='card-label'
                style={{ backgroundColor: colour }}
              >
                {label['title']}
              </div>
            );
          })}
        </div>
        <h3 className='card-heading'>{title}</h3>
        <p className='card-description'>{description}</p>
        <div className='card-button-container'>
          {link === '' ? (
            <>
              <a
                href={github}
                target='_blank'
                rel='noreferrer noopener'
                style={{ textDecoration: 'none' }}
                className='button'
              >
                Repo
              </a>
              {deploy !== '' && (
                <a
                  href={deploy}
                  target='_blank'
                  rel='noreferrer noopener'
                  style={{ textDecoration: 'none' }}
                  className='button'
                >
                  Deployment
                </a>
              )}
            </>
          ) : (
            <a
              href={link}
              style={{ textDecoration: 'none' }}
              className='button'
            >
              Read More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card
