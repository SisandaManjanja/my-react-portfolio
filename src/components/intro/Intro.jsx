import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'
import CV from '../../assets/docs/Sisanda_Manjanja_CV.pdf';



const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Sisanda Manjanja" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
           
          </div>
          <p>
          Enthusiastic junior software developer with a national diploma from
          Nelson Mandela University and six months of experience at Capaciti
          upskilling. Proven track record of successfully contributing to diverse
          projects, demonstrating strong problem-solving and teamwork skills.
          Committed to continuous learning, staying updated on industry trends,
          and expanding technical proficiency. Actively engaged in professional
          networking and seeking opportunities to apply skills and knowledge in a
          dynamic work environment. Strong communication and organizational
          skills, coupled with a positive and persistent mindset. Eager to
          contribute to impactful projects and bring value to a forward-thinking
          organization.
          </p>
          <div class="custom-buttons-container">
          <a href={CV} download className="custom-button">
    Download CV
  </a>
  <a href="#contact" class="custom-button">
    Hire Me
  </a>
</div>
          
        </div>
      </div>
    </section>
  );
};

export default Intro;
