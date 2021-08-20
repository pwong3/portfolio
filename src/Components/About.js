import React from 'react';
import mePhoto from '../Resources/me.jpg';
import sfsuLogo from '../Resources/SF-State_Standard-Logo-Kit/SF State Standard Logo Kit/Vertical Color/SFState_V_rgb.jpg';
import { FaDownload } from 'react-icons/fa';
import { Links } from './Icons/Links';
import { Skills } from './Skills/Skills';
import { SkillCard } from './Skills/SkillCard';
import '../Styles/About.css';

function About() {
  return (
    <section className='about-section' id='aboutme'>
      <div className='about-div'>
        <img className='avatar' src={mePhoto} alt='profile pic' />
        <div className='about-right-col'>
          <h1>About Me</h1>
          <p>
            I am a computer science graduate. I enjoy building things and
            learning about new technologies, especially related to Android and
            mobile technologies. I specialize in front end development but am
            open to all technical positions.
          </p>
          <br />
          <a
            className='download-button'
            target='_blank'
            without
            rel='noopener noreferrer'
            href={Links.resume}
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className='about-skills-div'>
        <h1>Skills</h1>
        <div className='about-skills-row'>
          {Skills.map((skill, index) => {
            return (
              <SkillCard
                key={index}
                name={skill.name}
                image={skill.image}
                bgColor={skill.color}
                alt={skill.alt}
                about={skill.about}
              />
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className='about-education-div'>
        <h1>Education</h1>
        <div className='about-education-right-col'>
          <div className='sfsu-header'>
            <img className='sfsu-logo' src={sfsuLogo} alt='sfsuLogo' />
            <div className='sfsu-div'>
              <h1 id='college-name'>San Francisco State University</h1>
              <p id='college-text'>Computer Science, B.S. - 2015-2018</p>
            </div>
          </div>
          <h3>Relevant Coursework</h3>
          <ul className='coursework'>
            <li>Intro to Computer Programming</li>
            <li>Data Structures</li>
            <li>Machine Structures</li>
            <li>Software Development</li>
            <li>Operating System Principles</li>
            <li>Analysis of Algorithm</li>
            <li>Programming Languages</li>
            <li>Software Engineering</li>
            <li>Introduction to Database Systems</li>
            <li>Theory of Computing</li>
            <li>Artificial Intelligence</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
