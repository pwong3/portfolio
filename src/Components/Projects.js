import React from 'react';
import btMobileApp from '../Resources/bestTileMobileApp.svg';
import portfolioImage from '../Resources/portfolioScreenshot.svg';
import { Icon } from './Icons/Icon';
import { Links } from './Icons/Links';
import { FaGooglePlay, FaYoutube } from 'react-icons/fa';
import { GrAppleAppStore } from 'react-icons/gr';
import '../Styles/Projects.css';

function Projects() {
  return (
    <section className='project-section' id='projects'>
      <h1 className='project-title'>Projects</h1>
      <article className='project-card'>
        <header className='project-card-header'>
          <h2 className='card-title'>Best Tile Mobile App</h2>
          <h2 className='project-icon'>
            <Icon href={Links.playStore} icon={<FaGooglePlay />} />
            <Icon href={Links.appStore} icon={<GrAppleAppStore />} />
          </h2>
        </header>
        <img src={btMobileApp} alt='btMobileImage' />
        <section className='project-card-desc'>
          <p>
            Best Tile mobile application allows customers to find and view
            products on the go.
            <br />
            Built with React Native and Firebase.
            <br />
            Launched in
            <a
              className='link'
              href={Links.playStore}
              target='_blank'
              rel='noopener noreferrer'
            >
              Google Play Store
            </a>
            and
            <a
              className='link'
              href={Links.appStore}
              target='_blank'
              rel='noopener noreferrer'
            >
              Apple App Store
            </a>
            .
          </p>
        </section>
      </article>
      <article className='project-card'>
        <header className='project-card-header'>
          <h2 className='card-title'>Best Tile Admin Web App</h2>
          <h2 className='project-icon'>
            <Icon href={Links.youtube} icon={<FaYoutube />} />
          </h2>
        </header>
        <div className='project-card-youtube-container'>
          <iframe
            className='project-card-youtube'
            title='Best Tile Admin Demo'
            src={Links.youtubeEmbed}
            frameborder='0'
          ></iframe>
        </div>
        <section className='project-card-desc'>
          <p>
            Web application allows Best Tile admin to update the database.
            <br />
            Built with ReactJS and Firebase.
            <br />
          </p>
        </section>
      </article>
      <article className='project-card'>
        <header className='project-card-header'>
          <h2 className='card-title'>Portfolio</h2>
        </header>
        <img src={portfolioImage} alt='portfolioImage' />
        <section className='project-card-desc'>
          <p>
            My portfolio.
            <br />
            Built with ReactJS, HTML5 semantics, and CSS3.
            <br />
          </p>
        </section>
      </article>
    </section>
  );
}

export default Projects;
