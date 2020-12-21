import { ExpandMoreRounded } from '@material-ui/icons';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './index.css'
import { Container } from '@material-ui/core';
import {data} from '../data'

export default function HomePage() {
  return (
    <div>
      <Container>
        <div id='banner-section'>
          <div className='banner-container'>
            <h1 className='banner-heading'>Hello, I'm Gabriel!</h1>
            <p className='banner-description'>
              I am a UNSW computer science student in my penultimate year
              aspiring to become as a frontend web developer!
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
          <br/>
          <h1>selected projects</h1>
          <hr />
          <br />
          <div className='flex-container'>
            {data.map((item) => (
              <ProjectCard
                img={item.img}
                title={item.title}
                description={item.description}
                labels={item.labels}
                pageURL={item.pageURL}
                github={item.github}
                deploy={item.deploy}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
