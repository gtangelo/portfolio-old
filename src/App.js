import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/Navbar.js';
import routes from './Routes';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import BlogPage from './pages/BlogPage.js';
import ResumePage from './pages/ResumePage.js';

import './App.css'
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.ABOUT} component={AboutPage} />
          <Route exact path={routes.RESUME} component={ResumePage} />
          <Route exact path={routes.PROJECTS} component={ProjectsPage} />
          <Route exact path={routes.BLOG} component={BlogPage} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
