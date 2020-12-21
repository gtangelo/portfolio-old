import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import routes from '../Routes';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from './Button.js'
import './Navbar.css'
import {logo} from '../data'
import { Container } from '@material-ui/core';

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false)


  const handleMenu = () => setMenuIcon(!menuIcon);
  const closeMenu = () => setMenuIcon(false)

  return (
    <nav className='navbar-container'>
      <Container>
        <header>
          <Link to={routes.HOME} className='logo'>
            {logo}
          </Link>
          <div className='menu-container' onClick={handleMenu}>
            {menuIcon ? <CloseIcon /> : <MenuIcon />}
          </div>
          <ul
            className={
              menuIcon
                ? 'navbar-links-container active'
                : 'navbar-links-container'
            }
          >
            <li className='nav-item'>
              <Link to={routes.ABOUT} className='nav-link' onClick={closeMenu}>
                <li>About</li>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={routes.PROJECTS}
                className='nav-link'
                onClick={closeMenu}
              >
                <li>Projects</li>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={routes.RESUME} className='nav-link' onClick={closeMenu}>
                <li>Resume</li>
              </Link>
            </li>
          </ul>
        </header>
      </Container>
    </nav>
  );
}

export default Navbar
