import './contact.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import ReCAPTCHA from "react-google-recaptcha";

import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from 'emailjs-com'; 

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isVerified) {
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
    } else {
      alert("Please verify the reCAPTCHA before sending the message.");
    }
  };

  const onChange = () => {
    setIsVerified(true);
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
            <a href="mailto:sisandaemm@gmail.com">Send a message</a>
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
            type="email" 
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
          <ReCAPTCHA
            sitekey="6LfiWnkpAAAAAFGXCxW5RchCwvc7BeqbC2Ep_7sR"
            onChange={onChange}
          />
          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={!isVerified} // Disable button if reCAPTCHA is not verified
          >
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP 👍</span>}
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

