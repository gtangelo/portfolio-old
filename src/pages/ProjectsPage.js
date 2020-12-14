import { Container } from '@material-ui/core';
import React from 'react';
import Card from '../components/Card';
import ProjectBanner from '../components/ProjectBanner';
import Title from '../components/Title';

export default function ProjectsPage() {
  return (
    <Container>
      <Title title='My Projects' />
      <Card
        title='Flockr Backend'
        labels={[
          { title: 'Python', id: 1 },
          { title: 'Flask', id: 1 },
          { title: 'Testing', id: 1 },
        ]}
        isHorizontal={true}
        description='Developed a backend API server for a frontend
        application that is similar to Slack and
        Flock called Flockr and exhaustively created test suite for the
        implementation. Lead a team of five and operated in an
        agile (i.e. task board, standups, sprints)
        and CI/CD environment.'
        link=''
        github='https://github.com/gtangelo/task-tracker'
        deploy=''
        imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
      />
      <br />
      <Card
        title='Task Tracer - Chrome Extension'
        labels={[
          { title: 'Javascript', id: 1 },
          { title: 'ReactJS', id: 1 },
          { title: 'HTML/CSS', id: 1 },
        ]}
        isHorizontal={true}
        description='Use a chrome extension to track time spent for each tasks and record your progress.'
        link=''
        github='https://github.com/gtangelo/task-tracker'
        deploy='https://flockr-wed15mango1.herokuapp.com/'
        imageUrl='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'
      />
      <br />
    </Container>
  );
}
