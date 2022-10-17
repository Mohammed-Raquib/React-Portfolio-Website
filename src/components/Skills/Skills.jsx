import React from 'react';
import './Skills.css';
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <h5>My Technical Skills </h5>
      
      <div className="skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Beginner</small>
              </div>

            </article><article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon' />
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills;