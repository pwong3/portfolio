import React, { useState, useEffect } from 'react';
import { Icon } from './Icons/Icon';
import { Links } from './Icons/Links';
import { FaLinkedinIn, FaGithub, FaAngleDown } from 'react-icons/fa';
import '../Styles/Home.css';

function Home() {
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })
  return (
    <section id='home'>
      <div className='home-img' style={{ height: height }}>
        <div className='home-text'>
          <h1>Hi. I'm Patrick Wong.</h1>
          <h3>
            I am a computer science graduate. I enjoy building things and learning about new technologies, especially related to Android and mobile technologies. I have an interest in front end development but am open to all technical positions.
          </h3>
          <hr />
          <div className='home-icon'>
            <Icon href={Links.linkedIn} icon={<FaLinkedinIn title={Links.linkedIn} size='2rem' />} />
            <Icon href={Links.gitHub} icon={<FaGithub title={Links.gitHub} size='2rem' />} />
          </div>
        </div>
        <a className='down-arrow' href='#aboutme'><FaAngleDown /></a>
      </div>
    </section>
  );
}

export default Home;
