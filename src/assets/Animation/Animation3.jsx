import React from 'react';
import Lottie from 'lottie-react';
import animationd from './service1.json'; 

const Animation3 = () => {
  return <Lottie animationData={animationd} loop={false} className='w-full h-full' />;
};

export default Animation3;
