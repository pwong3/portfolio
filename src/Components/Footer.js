import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { Icon } from './Icons/Icon';
import { Links } from './Icons/Links';
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from 'react-icons/fa';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className='footer' id='contact'>
      <a className='up-arrow' href='#home'>
        <FaAngleUp />
      </a>
      <div>
        <p>Interested in what I'm working on?</p>
        <p>Feel free to contact me at PatrickYCWong@gmail.com.</p>
        <div className='footer-icon'>
          <Icon href={Links.mailTo} icon={<FaRegEnvelope size='2rem' />} />
          <Icon href={Links.linkedIn} icon={<FaLinkedinIn size='2rem' />} />
          <Icon href={Links.gitHub} icon={<FaGithub size='2rem' />} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
