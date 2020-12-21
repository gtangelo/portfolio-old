import { Container } from '@material-ui/core';
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectBanner from '../components/ProjectBanner';
import Title from '../components/Title';
import {data} from '../data'

export default function ProjectsPage() {
  return (
    <Container>
      <Title title='My Projects' />
      <div className='flex-container'>
        {data.map((item) => (
          <>
            <ProjectCard
              img={item.img}
              title={item.title}
              description={item.description}
              labels={item.labels}
              pageURL={item.pageURL}
              github={item.github}
              deploy={item.deploy}
            />
            <br />
          </>
        ))}
      </div>
    </Container>
  );
}
