import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { MenuItems } from './MenuItems';
import '../../Styles/NavBar.css';

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <nav className='nav-header'>
      <a className='navbar-logo' href='#home'>LOGO</a>
      <div className='menu-icon' onClick={handleClick}>
        {clicked ? <MdClose /> : <MdMenu />}
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              {/* a className='nav-links' */}
              <a className={item.cName} target='_blank' href={item.href} onClick={handleClick}>
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
