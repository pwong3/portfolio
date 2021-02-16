import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { Icon } from './Icons/Icon';
import { Links } from './Icons/Links';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <a className='up-arrow' href='#home'>
        <FaAngleUp />
      </a>
      <div className='footer-icon'>
        <Icon href={Links.linkedIn} icon={<FaLinkedinIn title={Links.linkedIn} size='2rem' />} />
        <Icon href={Links.gitHub} icon={<FaGithub title={Links.gitHub} size='2rem' />} />
      </div>
    </footer>
  );
}

export default Footer;
