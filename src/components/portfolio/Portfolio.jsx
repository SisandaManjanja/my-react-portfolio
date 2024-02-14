import "./portfolio.css";

import IMG1 from "../../assets/website.jpg";
import IMG2 from "../../assets/GAME.jpg";

import IMG4 from "../../assets/metric converter.png";


import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Website ",
      img: IMG1,
      description:
        "An educational website is a huge interactive platform to present various information for people.",
      technologies: "Html | CSS | Javascript  ",
      link: "https://shiny-salmiakki-411ddd.netlify.app/",
      github: "https://github.com/TshepoShale/GroupWebsite",
    },
    {
      id: 2,
      title: "Metric Converter",
      img: IMG4,
      description:
        "The COVID Tracking Project collects and publishes the most complete testing data available for all areas of the world.",
      technologies: "PYTHON",
      link: "https://covid-19-tracker-weld-nu.vercel.app/",
      github: "https://github.com/Bawrer/5Stars_UnitConverter",
    },
    {
      id: 3,
      title: "MEMORY GAME",
      img: IMG2,
      description: "This site is a kind of social media platform. You can register and share your posts.",
      technologies: "NODE JS",
      link: "https://aesthetic-mochi-d6c533.netlify.app/",
      github: "",
    },
    
   
   
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
