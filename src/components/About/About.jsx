import React from 'react';
import './About.css';
import AboutImg from '../../assets/AboutImg.jpeg';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <h5>My Introduction</h5>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutImg} alt="" />
          </div>
        </div>

        <div className="about__content">
          <p className='about__content-description'>I’m passionate about software development and I’m skilled in HTML, CSS, JavaScript and React. I’m now looking for a junior dev position as I recently learned how to code by myself.</p>
        
          <a href="#account" className='btn btn-primary about__btn'>Contact Me</a>
        </div>


      </div>
    </section>
  )
}

export default About