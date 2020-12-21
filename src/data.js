const REACTJS = {
  title: 'ReactJS',
  colour: '#5ED3F3',
};

const HTML_CSS = {
  title: 'HTML/CSS',
  colour: '#E96228',
};

const UX_UI_DESIGN = {
  title: 'UX/UI',
  colour: '#8A8AF6',
};

const PYTHON = {
  title: 'Python',
  colour: '#FFCE3B',
};

const FLASK = {
  title: 'Flask',
  colour: '#387AB1',
};

const TESTING = {
  title: 'Testing',
  colour: '#2EA44F',
};



export const data = [
  {
    img: '/flockr.png',
    title: 'Task Tracer - Chrome Extension',
    description:
      'Use a chrome extension to track time spent for each tasks and record your progress.',
    labels: [REACTJS],
    pageURL: 'https://github.com/gtangelo/task-tracker',
    github: 'https://github.com/gtangelo/task-tracker',
    deploy: '',
  },
  {
    img: '/flockr.png',
    title: 'Flockr Backend API',
    description:
      'Backend API project that is used to serve a communication tool application similar to Slack called Flockr.',
    labels: [PYTHON, FLASK, TESTING],
    pageURL: 'https://github.com/gtangelo/flockr-backend',
    github: 'https://github.com/gtangelo/flockr-backend',
    deploy: 'https://flockr-wed15mango1.herokuapp.com/',
  },
  {
    img: '/flockr.png',
    title: 'My Portfolio Website',
    description:
      'Created my portfolio website using ReactJS and my own custom CSS styling.',
    labels: [REACTJS, HTML_CSS, UX_UI_DESIGN],
    pageURL: 'https://gtangelo.github.io/portfolio/#/',
    github: 'https://github.com/gtangelo/portfolio',
    deploy: '',
  },
  // {
  //   img: '',
  //   title: '',
  //   description: '',
  //   labels: [],
  //   pageURL: '',
  //   github: '',
  //   deploy: '',
  // },
];

export const logo = "<gabriel/>"