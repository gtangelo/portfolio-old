import { ExpandMoreRounded } from '@material-ui/icons';
import React from 'react';
import Card from '../components/Card';
import './index.css'
import { logo } from '../data';
import { Container } from '@material-ui/core';
import ReactDOM from 'react-dom';

const Headline = ({ title }) => {
  return (
    <div className='heading-section'>
      <h3 className='side-line'>
        <span>{title}</span>
      </h3>
    </div>
  );
}

// const handleScroll = (event) => {
//   const tesNode = ReactDOM.findDOMNode(this.refs.test);
//   window.scrollTo(0, tesNode.offsetTop);
// }


export default function HomePage() {
  return (
    <div>
      <Container>
        <div id='banner-section'>
          <div className='banner-container'>
            <div className='banner-logo'>{logo}</div>
            <h1 className='banner-heading'>Hello, World!</h1>
            <p className='banner-description'>
              I'm Gabriel, a UNSW computer science student in my penultimate
              year aspiring to become as a frontend web developer!
            </p>
            <p className='banner-description'>
              Scroll to see something awesome
            </p>
            <div className='banner-arrow'>
              <ExpandMoreRounded
                className='arrow-down'
                style={{ fontSize: 80 }}
              />
            </div>
          </div>
        </div>
      </Container>
      <div id='latest-section'>
        <Container>
          <Headline title='My Latest Works' />
          <div className='flex-container'>
            <Card
              imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
              title='Task Tracer - Chrome Extension'
              description='Use a chrome extension to track time spent for each tasks and record your progress.'
              labels={[{ title: 'Projects', id: 1 }]}
              link='https://github.com/gtangelo/task-tracker'
              isHorizontal={false}
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
              isHorizontal={false}
            />
            <Card
              imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
              title='My Experience with RSE STEM Leaders Program'
              description='It was a worthwhile experience that introduced me to web development...'
              labels={[{ title: 'Article', id: 2 }]}
              link='https://github.com/gtangelo/task-tracker'
              isHorizontal={false}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}
