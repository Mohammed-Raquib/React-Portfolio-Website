import React from 'react';
import Mohammed_Raquib_Resume  from '../../assets/Mohammed_Raquib_Resume.pdf';

function CTA() {
  return (
    <div className="cta">
        <a href={Mohammed_Raquib_Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA