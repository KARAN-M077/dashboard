import React, { useEffect, useState } from 'react';
import Animation2 from '../../../assets/Animation/Animation2';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink from react-scroll
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import Service from '../Services/Service';
import Navbar from '../Navbar/Navbar';
import Blog from '../Blogs/Blog';
import Test from '../Testimonials/Test';
import Footer from '../Footer/Footer';
import Na from '../Navbar/Navbar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Landing() {
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
    <>
      <div className={Na.nav}>
        <div className={Na.navb}>
          <h1>Hire-Bridge</h1>
          <button className={Na.navicon} onClick={handleToggleNav}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div
            className={`${Na.navb1} ${mobileView ? 'flex-column' : ''}`}
            style={{ display: showNavLinks || !mobileView ? 'flex' : 'none' }}
          >
            <ScrollLink to='service' smooth={true} duration={800} className={Na.lk}>Our Services</ScrollLink>
            <ScrollLink to='blog' smooth={true} duration={800} className={Na.lk}>Blogs</ScrollLink>
            <ScrollLink to='contact' smooth={true} duration={1800} className={Na.lk}>Contact Us</ScrollLink>
            <RouterLink to='/Login' className={Na.lk12}>Login</RouterLink>
          </div>
        </div>
      </div>
      <div className='pb-[30px]'>
        <div className='flex flex-row flex-wrap px-[5%] max950:justify-center '>
          <div className='w-[40%] flex flex-col gap-10 max950:w-full max950:text-center'>
            <h1 className='text-[70px] leading-[65px] font-semibold text-[#1B4F4A] mt-[20%] max950:text-[40px] max950:leading-[40px] max950:mt-[40%] max550:text-6xl'>
              All in one placement platform for students
            </h1>
            <div className='flex flex-row gap-3 flex-wrap max950:justify-center z-10'>
              <RouterLink to='/dashboard' className='bg-[#FC661A] text-white font-medium px-10 py-3 text-[16px] rounded-[10px] max950:text-[14px]'>Try SkillIt now</RouterLink>
              <RouterLink to='/Signup' className='bg-[#1B4F4A] text-white font-medium px-10 py-3 text-[16px] rounded-[10px] max950:text-[14px]'>Signup your college</RouterLink>
            </div>
          </div>
          <div className='w-[200%] mt-[-31%] max950:hidden z-0'>
            <Animation2 />
          </div>
        </div>
        <div id='service' className='mt-[8%] max550:mt-[50%]'>
          <Service />
        </div>
        <div className='mt-[10%]'>
          <h1 className='text-center text-5xl font-semibold text-[#1B4F4A]' style={{ fontFamily: 'Work Sans, sans-serif' }}>
            Signup your college now
          </h1>
          <p className='text-center w-[60%] mt-6 mx-auto text-[20px] text-[#3B857E] font-light'>
            ProAgenda seamlessly integrates with unique integration partners, allowing you to run your business effectively and at full potential.
          </p>
          <RouterLink to='/Signup' className='flex justify-center mx-auto bg-[#FC661A] text-white font-medium text-xl w-fit px-[60px] py-2 mt-6 rounded-[8px]'>
            Signup
          </RouterLink>
        </div>

        <div id='blog' className='mt-[10%]'>
          <Blog />
        </div>

        <h1 className='mt-[12%] text-center text-[#1B4F4A] font-semibold text-5xl' style={{ fontFamily: 'Work Sans, sans-serif' }}>
          Here's what our clients say
        </h1>
        <div className='mt-2'>
          <Test />
        </div>

        <div id='contact'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Landing;
