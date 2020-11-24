import React from 'react'
import './Card.css'

const Card = ({ imageUrl, title, description, labels, link }) => {
  return (
    <div className='card-container'>
      <a
        href={link}
        target='_blank'
        rel='noreferrer noopener'
        style={{ textDecoration: 'none' }}
      >
        <div
          className='card-image'
          style={{ backgroundImage: 'url("' + imageUrl + '")' }}
        />
        <div className='card-content'>
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
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default Card
