import React from 'react';
import useMediaQuery from './Hooks/Mediaquery';
import './App.css';
import Login from './components/Login/Login';
import Animation from './assets/Animation/Animation'; 
import Navbar from './components/Home/Navbar/Navbar';
import Landing from './components/Home/Landing/Landing';
import Signup from './components/Signup/Signup';


function Homepage() {
  const isMobile = useMediaQuery('(max-width: 640px)');

  return (
    <div className='bg-[#F5F3EE]'>
      <Landing/>
      
    </div>
  );
}

export default Homepage;
