import React from 'react';
import './Services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <h5>What I Offer</h5>

      <div className="service__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web development</h3>
          </div>  
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Website Development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Website Design & Re-design</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Responsive Design.</p>
              </li>
            </ul>    
        </article>
      </div>
    </section>
  )
}

export default Services
