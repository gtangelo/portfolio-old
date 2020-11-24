import React from 'react';
import ProjectBanner from '../components/ProjectBanner';

export default function ProjectsPage() {
  return (
    <div>
      Projects
      <div>
        <ProjectBanner
          placement='left'
          title='Task Tracer - Chrome Extension'
          labels={[
            { title: 'Javascript', id: 1 },
            { title: 'ReactJS', id: 1 },
            { title: 'HTML/CSS', id: 1 },
          ]}
          description='Use a chrome extension to track time spent for each tasks and record your progress.'
          githubLink='https://github.com/gtangelo/task-tracker'
          deployLink=''
        />
        <ProjectBanner
          placement='right'
          title='Task Tracer - Chrome Extension'
          labels={[
            { title: 'Javascript', id: 1 },
            { title: 'ReactJS', id: 1 },
            { title: 'HTML/CSS', id: 1 },
          ]}
          description='Use a chrome extension to track time spent for each tasks and record your progress.'
          githubLink='https://github.com/gtangelo/task-tracker'
          deployLink=''
        />
        <ProjectBanner
          placement='left'
          title='Task Tracer - Chrome Extension'
          labels={[
            { title: 'Javascript', id: 1 },
            { title: 'ReactJS', id: 1 },
            { title: 'HTML/CSS', id: 1 },
          ]}
          description='Use a chrome extension to track time spent for each tasks and record your progress.'
          githubLink='https://github.com/gtangelo/task-tracker'
          deployLink=''
        />
      </div>
    </div>
  );
}
