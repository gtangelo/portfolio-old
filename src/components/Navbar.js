import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import routes from '../Routes';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Button from './Button.js'
import './Navbar.css'

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false)


  const handleMenu = () => setMenuIcon(!menuIcon);
  const closeMenu = () => setMenuIcon(false)

  return (
    // <header>
    //   <div className='navbar-container'>
    //     <div className='logo-container'>
    //       <Link to={routes.HOME} className='logo'>
    //         Gabriel
    //       </Link>
    //     </div>
    //     <nav className='navbar-links-container' onClick={handleMenu}>
    //     </nav>
    //   </div>
    // </header>
    <header>
      <div className='logo-container'>
        <Link to={routes.HOME} className='logo'>
          Gabriel
        </Link>
      </div>
      <div className='menu-container' onClick={handleMenu}>
        {menuIcon ? <CloseIcon /> : <MenuIcon />}
      </div>
      <nav className='navbar-container'>
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
            <Link to={routes.PROJECTS} className='nav-link' onClick={closeMenu}>
              <li>Projects</li>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={routes.RESUME} className='nav-link' onClick={closeMenu}>
              <li>Resume</li>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={routes.BLOG} className='nav-link' onClick={closeMenu}>
              <li>Blog</li>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar
