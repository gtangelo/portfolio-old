import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import { logo } from '../data';


const Footer = () => {
  return (
    <div className='footer-container'>
      <div>Github: github.com/gtangelo</div>
      <div>LinkedIn: linkedin.com/in/gabriel-angelo-ting/</div>
      <div>
        <div>
          {logo}
        </div>
      </div>
    </div>
  );
}

export default Footer
