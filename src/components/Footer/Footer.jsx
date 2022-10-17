import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>RAQUIB.</a>

      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mohammed-raquib/" target='_blank' rel="noreferrer noopener"><BsLinkedin /></a>
        <a href='https://github.com/Mohammed-Raquib' target='_blank' rel="noreferrer noopener"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; RAQUIB. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer