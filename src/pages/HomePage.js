import { ExpandMoreRounded } from '@material-ui/icons';
import React from 'react';
import Card from '../components/Card';
import './index.css'

export default function HomePage() {
  return (
    <div>
      <div className='main-banner'>
        <h1 className='main-heading'>Hello. I'm Gabriel.</h1>
        <p className='main-description'>
          I am a first year student aspiring to become as web developer!
        </p>
        <div className='arrow-container'>
          <div>
            <ExpandMoreRounded
              className='arrow-down'
              style={{ fontSize: 80 }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className='center-container heading-section'>
          <h3 className='side-line'>
            <span>My Latest Works... Enjoy!</span>
          </h3>
        </div>
        <div className='center-container'>
          <Card
            imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            title='Task Tracer - Chrome Extension'
            description='Use a chrome extension to track time spent for each tasks and record your progress.'
            labels={[{ title: 'Projects', id: 1 }]}
            link='https://github.com/gtangelo/task-tracker'
          />
          <Card
            imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            title='Making My Portfolio'
            description='Learning which tech stack to use when creating my portfolio website was most challenging...'
            labels={[
              { title: 'Projects', id: 1 },
              { title: 'Article', id: 2 },
            ]}
            link='https://github.com/gtangelo/task-tracker'
          />
          <Card
            imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            title='My Experience with RSE STEM Leaders Program'
            description='It was a worthwhile experience that introduced me to web development...'
            labels={[{ title: 'Article', id: 2 }]}
            link='https://github.com/gtangelo/task-tracker'
          />
        </div>
      </div>

      <div>
        <div className='center-container heading-section'>
          <h3 className='side-line'>
            <span>My Latest Projects</span>
          </h3>
        </div>
        <div className='center-container'>
          <Card
            imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            title='Task Tracer - Chrome Extension'
            description='Use a chrome extension to track time spent for each tasks and record your progress.'
            labels={[{ title: 'Projects', id: 1 }]}
            link='https://github.com/gtangelo/task-tracker'
          />
          <Card
            imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            title='Making My Portfolio'
            description='Learning which tech stack to use when creating my portfolio website was most challenging...'
            labels={[
              { title: 'Projects', id: 1 },
              { title: 'Article', id: 2 },
            ]}
            link='https://github.com/gtangelo/task-tracker'
          />
          <Card
            imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            title='My Experience with RSE STEM Leaders Program'
            description='It was a worthwhile experience that introduced me to web development...'
            labels={[{ title: 'Article', id: 2 }]}
            link='https://github.com/gtangelo/task-tracker'
          />
          <Card
            imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
            title='My Experience with RSE STEM Leaders Program'
            description='It was a worthwhile experience that introduced me to web development...'
            labels={[{ title: 'Article', id: 2 }]}
            link='https://github.com/gtangelo/task-tracker'
          />
        </div>
      </div>
    </div>
  );
}
