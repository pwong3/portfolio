import React, { useState, useEffect } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { MenuItems } from './MenuItems';
import PWLogo from '../../Resources/PWLogo.png'
import '../../Styles/NavBar.css';

function NavBar() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [darkNavBar, setDarkNavBar] = useState(false);
  const handleMenuClick = () => {
    setMenuClicked(!menuClicked);
  }
  const closeMenu = () => {
    setMenuClicked(false);
  }
  useEffect(() => {
    const listenScrollEvent = () => {
      if (window.scrollY < 750) {
        setDarkNavBar(false);
      } else if (window.scrollY > 750) {
        setDarkNavBar(true);
      }
    }
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    }
  })
  return (
    <nav className={darkNavBar ? 'nav-header scroll' : 'nav-header'}>
      <a className='navbar-logo' href='#home'>
        <img style={{width: '2rem', height:'2rem'}} src={PWLogo} alt='PWLogo'/>
      </a>
      <div className='menu-icon' onClick={handleMenuClick}>
        {menuClicked ? <MdClose /> : <MdMenu />}
      </div>
      <ul className={menuClicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              {/* a className='nav-links' */}
              <a
                className={item.cName}
                target='_blank'
                without rel='noopener noreferrer'
                href={item.href}
                onClick={closeMenu}
              >
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
