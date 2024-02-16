import './contact.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from 'emailjs-com'; // Changed import statement

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        'service_yppshy5',
        'template_ea0x43a',
        e.target,
        'Vf2O8lXA6nvd8AfMa'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">  
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sisandaemm@gmail.com</h5>
            <a href="sisandaemm@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="email" // Changed input type to "email"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
      <div className="footer__socials">
        <a href="" target="_blank" rel="noreferrer">
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/SisandaManjanja?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
