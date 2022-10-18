import React from 'react';
import './Header.css';
import CTA from './CTA';
import Headerimg from  '../../assets/Headerimg.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div id='/#' className="container header__container">
      <h3>Hello I'm</h3>
      <h1>Mohammed Raquib</h1>
      <h3 className="text-light">Frontend Developer</h3>
      <CTA />
      <HeaderSocials />

      <div className="headerImg">
        <img id='headerimage' src={Headerimg} alt="" />
      </div>

    </div>
    </header>
  )
}

export default Header
