import React, { useEffect, useState } from 'react'
import Na from './Navbar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [mobileView, setMobileView] = useState(false);
 
  const handleToggleNav = () => {
    if (mobileView) {
      setShowNavLinks(!showNavLinks);
    }
  };

  const checkScreenSize = () => {
    setMobileView(window.innerWidth <= 750);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={Na.nav}>
          <div className={Na.navb}>
            <h1>SkillIt</h1>
            <button className={Na.navicon} onClick={handleToggleNav}>
              <FontAwesomeIcon icon={faBars} />
            </button>
              <div
                 className={`${Na.navb1} ${mobileView ? 'flex-column' : ''}`}
                 style={{ display: showNavLinks || !mobileView ? 'flex' : 'none' }}
                >
                <Link className={Na.lk} to="#">Home</Link>
                <Link to='#' smooth={true} duration={800} className={Na.lk}>Our Services</Link>
                <Link to='#' smooth={true} duration={800} className={Na.lk}>Pricing</Link>
                <Link to='#' smooth={true} duration={800} className={Na.lk}>Contact Us</Link>
                <Link to='/Login' smooth={true} duration={2000} className={Na.lk12}>Login</Link>
              </div>
           </div>
    </div>
  )
}


// import commands

// npm install --save @fortawesome/fontawesome-svg-core

// npm install --save @fortawesome/react-fontawesome


// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/pro-light-svg-icons
// npm install --save @fortawesome/free-brands-svg-icons

// npm i aos


// npm install react-router-dom

// dont forget to add Browserouter in main.tsx