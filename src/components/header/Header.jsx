import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <a href="#home" className="footer__logo">S</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="container header__container">
        <h1>Sisanda Manjanja</h1>
        <h5 className="text-light">Full-stack software Developer</h5>
        <CTA />
        
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
