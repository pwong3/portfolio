import React from 'react';
import btMobileApp from '../Resources/bestTileMobileApp.svg';
import btWebAdmin from '../Resources/bestTileAdmin.svg';
import { Icon } from './Icons/Icon';
import { Links } from './Icons/Links';
import { FaGooglePlay, FaYoutube } from 'react-icons/fa';
import { GrAppleAppStore } from 'react-icons/gr';
import '../Styles/Work.css';

function Work() {
  return (
    <section className='work-section' id='work'>
      <div>
        <h1>Work</h1>
        <div>
          <div className='work-card'>
            <img src={btMobileApp} />
            <div>
              <div>
                <h2>Best Tile Mobile App</h2>
                <h2 className='work-icon'>
                  <Icon href={Links.playStore} icon={<FaGooglePlay title={Links.playStore} />} />
                  <Icon href={Links.appStore} icon={<GrAppleAppStore title={Links.appStore} />} />
                </h2>
              </div>
              <div>
                <p>
                  Best Tile mobile application for customers to view products
                  on the go.<br />
                  Built with React Native and Firebase.<br />
                  Launched in
                  <a
                    className='link'
                    href={Links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Play Store
                  </a>
                  and
                  <a
                    className='link'
                    href={Links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple App Store
                  </a>.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className='work-card'>
            <img src={btWebAdmin} />
            <div>
              <div>
                <h2 className='work-card-header'>Best Tile Admin Web App</h2>
                <h2 className='work-icon'>
                  <Icon href={Links.youtube} icon={<FaYoutube title={Links.youtube} />} />
                </h2>
              </div>
              <div>
                <p>
                  Web application for admin to update the database for the mobile application.<br />
                Built with ReactJS and Firebase.<br />
                Watch a demo on
                <a
                    className='link'
                    href={Links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube
                </a>.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
