import React from 'react';
import { BsLinkedin} from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/mohammed-raquib/" target="_blank" rel="noreferrer noopener"><BsLinkedin /></a>
      <a href="https://github.com/Mohammed-Raquib" target="_blank" rel="noreferrer noopener"><BsGithub /></a>  
    </div>
  )
}

export default HeaderSocials;

