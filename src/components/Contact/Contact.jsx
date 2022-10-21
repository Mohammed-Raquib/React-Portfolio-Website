import React, { useRef } from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'your API key')
    .then(() => {
      alert("Message Sent");
      e.target.reset();
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <h5>Get In Touch</h5>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>mraquib46@gmail.com</h5>
            <a href="mailto:mraquib46@gmail.com" target='_blank' rel="noreferrer noopener">Send a message</a>
          </article>
          <article className='contact__option'>
            <HiOutlinePhone className='contact__option-icon' />
            <h4>Call Me</h4>
            <h5>+91-9164162512</h5>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Email-Id' required />
          <textarea name="message" rows="10" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary contact__btn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;