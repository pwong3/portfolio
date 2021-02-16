import React from 'react';
import mePhoto from '../Resources/me.jpg';
import { FaDownload } from 'react-icons/fa';
import { Links } from './Icons/Links';
import '../Styles/About.css';

function About() {
  return (
    <section className='about-section' id='aboutme'>
      <div className='about-div'>
        <img className='avatar' src={mePhoto} />
        <div className='about-text-col'>
          <h1>About Me</h1>
          {/*Who are you? What do you like to do in your spare time? Any fun facts? */}
          <p>
            I am a computer science graduate. I enjoy building things and learning about new technologies, especially related to Android and mobile technologies. I have an interest in front end development but am open to all technical positions.
          </p>
          <a
            className='download-button'
            target='_blank'
            href={Links.resume}>
              <FaDownload /> Download Resume
          </a>
        </div>
      </div>
    </section >
  );
}

export default About;
