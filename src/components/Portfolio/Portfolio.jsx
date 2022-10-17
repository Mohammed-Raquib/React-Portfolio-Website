import React from 'react';
import './Portfolio.css';
import Portfolio1 from '../../assets/Portfolio1.PNG';
import Portfolio2 from '../../assets/Portfolio2.PNG';
import Portfolio3 from '../../assets/Portfolio3.PNG';
import Portfolio4 from '../../assets/Portfolio4.PNG';
import Portfolio5 from '../../assets/Portfolio5.PNG';
import Portfolio6 from '../../assets/Portfolio6.PNG';

const data = [
  {
    id: 1,
    image: Portfolio1,
    title: 'React Weather App',
    description: 'Weather app allows user to check temperature at prefered location.',
    techStack: 'HTML, CSS, Javascript and React.',
    github: 'https://github.com/Mohammed-Raquib/React-Weather-App',
    demo: 'https://mohammed-raquib.github.io/React-Weather-App/'
  },
  {
    id: 2,
    image: Portfolio2,
    title: 'React Expense Tracker',
    description: 'Expense tracker allows the user to track their expenses.',
    techStack: 'HTML, CSS, Javascript and React.',
    github: 'https://github.com/Mohammed-Raquib/React-Expense-Tracker',
    demo: 'https://mohammed-raquib.github.io/React-Expense-Tracker/'
  },
  {
    id: 3,
    image: Portfolio3,
    title: 'Portfolio Website',
    description: 'Simple weather app using HTML, CSS and Javascript.',
    techStack: 'HTML, CSS and Javascript.',
    github: 'https://github.com/Mohammed-Raquib/Portfolio-Website',
    demo: 'https://mohammed-raquib.github.io/Portfolio-Website/'
  },
  {
    id: 4,
    image: Portfolio4,
    title: 'Form Validation',
    description: 'The app allows form validation on the client-side with two different styles for inputs : success and error.',
    techStack: 'HTML, CSS and Javascript.',
    github: 'https://github.com/Mohammed-Raquib/Form-Validation',
    demo: 'https://mohammed-raquib.github.io/Form-Validation/'
    
  },
  {
    id: 5,
    image: Portfolio5,
    title: 'Weather App',
    description: 'Weather app allows user to check temperature, humidity and wind speed at prefered location.',
    techStack: 'HTML, CSS and Javascript.',
    github: 'https://github.com/Mohammed-Raquib/Weather-App',
    demo: 'https://mohammed-raquib.github.io/Weather-App/'
  },
  {
    id: 6,
    image: Portfolio6,
    title: 'Todo List',
    description: 'Todo app allows users to make lists, edit and delete items of their lists.',
    techStack: 'HTML, CSS and Javascript.',
    github: 'https://github.com/Mohammed-Raquib/Todo-List',
    demo: 'https://mohammed-raquib.github.io/Todo-List/' 
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <h5>My Recent Work</h5>

      <div className="container portfolio__container">
        {
        data.map(({id, image, title, description, techStack, github, demo}) => {
          return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt=""/>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p><b>Tech Stack : </b>{techStack}</p>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel="noreferrer noopener">Github</a>
                <a href={demo} className='btn' target='_blank' rel="noreferrer noopener">Live Demo</a>
              </div>

            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio;