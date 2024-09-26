import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Animation3 from '../../../assets/Animation/Animation3';
import Animation4 from '../../../assets/Animation/Animation4';
import Animation5 from '../../../assets/Animation/Animation5';
import Animation6 from '../../../assets/Animation/Animation6';

function Service() {
  const [isAnimation3Visible, setIsAnimation3Visible] = useState(false);
  const [isAnimation4Visible, setIsAnimation4Visible] = useState(false);
  const [isAnimation5Visible, setIsAnimation5Visible] = useState(false);
  const [isAnimation6Visible, setIsAnimation6Visible] = useState(false);

  const animation3Ref = useRef(null);
  const animation4Ref = useRef(null);
  const animation5Ref = useRef(null);
  const animation6Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === animation3Ref.current) {
            setIsAnimation3Visible(true);
          } else if (entry.target === animation4Ref.current) {
            setIsAnimation4Visible(true);
          } else if (entry.target === animation5Ref.current) {
            setIsAnimation5Visible(true);
          } else if (entry.target === animation6Ref.current) {
            setIsAnimation6Visible(true);
          }
        }
      });
    }, { threshold: 1 }); 

    if (animation3Ref.current) observer.observe(animation3Ref.current);
    if (animation4Ref.current) observer.observe(animation4Ref.current);
    if (animation5Ref.current) observer.observe(animation5Ref.current);
    if (animation6Ref.current) observer.observe(animation6Ref.current);

    return () => {
      if (animation3Ref.current) observer.unobserve(animation3Ref.current);
      if (animation4Ref.current) observer.unobserve(animation4Ref.current);
      if (animation5Ref.current) observer.unobserve(animation5Ref.current);
      if (animation6Ref.current) observer.unobserve(animation6Ref.current);
    };
  }, []);

  return (
    <div>
      <h1 className='text-center font-semibold text-[#1B4F4A] text-4xl'>Our Services</h1>
      <div className='flex flex-col mt-[5%] max550:mt-[15%] w-[100%] justify-center align-middle items-center gap-[120px]'>

        <div className='flex flex-row flex-wrap justify-center align-middle items-center gap-16 max550:flex-col'>
          <div className='flex flex-col w-[30%] gap-6 max550:w-[80%]'>
            <h1 className='font-semibold text-[#1B4F4A] text-3xl'>Booking Platform</h1>
            <p className='font-sans text-[#308078] text-[21px]'>
              Do not waste your valuable time on (re)scheduling appointments, sending booking confirmations, reminders, payments, and more.
            </p>
            <Link className='text-[#FC661A] text-[17px] rounded-[10px] border w-fit px-[10%] py-[2.5%] border-[#FC661A] hover:bg-[#FC661A] hover:text-white transition-colors ease-in-out duration-500'>
              Read More
            </Link>
          </div>
          <div className='w-[30%] max550:w-[80%]' ref={animation3Ref}>
            {isAnimation3Visible && <Animation3 />}
          </div>
        </div>

        <div className='flex flex-row-reverse flex-wrap justify-center align-middle items-center gap-16 max550:flex-col'>
          <div className='flex flex-col w-[30%] gap-6 max550:w-[80%]'>
            <h1 className='font-semibold text-[#1B4F4A] text-3xl'>Academy management</h1>
            <p className='font-sans text-[#308078] text-[21px]'>
              Stop working with different agendas, spreadsheets, and other stand-alone tools, and improve the performance of your academy.
            </p>
            <Link className='text-[#FC661A] text-[17px] rounded-[10px] border w-fit px-[10%] py-[2.5%] border-[#FC661A] hover:bg-[#FC661A] hover:text-white transition-colors ease-in-out duration-500'>
              Read More
            </Link>
          </div>
          <div className='w-[30%] max550:w-[80%]' ref={animation4Ref}>
            {isAnimation4Visible && <Animation4 />}
          </div>
        </div>

        <div className='flex flex-row flex-wrap justify-center align-middle items-center gap-16 max550:flex-col'>
          <div className='flex flex-col w-[30%] gap-6 max550:w-[80%]'>
            <h1 className='font-semibold text-[#1B4F4A] text-3xl'>Indoor studios</h1>
            <p className='font-sans text-[#308078] text-[21px]'>
              Seamlessly link up the schedule of the professionals with your bays, simulators, or any other teaching utility.
            </p>
            <Link className='text-[#FC661A] text-[17px] rounded-[10px] border w-fit px-[10%] py-[2.5%] border-[#FC661A] hover:bg-[#FC661A] hover:text-white transition-colors ease-in-out duration-500'>
              Read More
            </Link>
          </div>
          <div className='w-[30%] max550:w-[80%]' ref={animation5Ref}>
            {isAnimation5Visible && <Animation5 />}
          </div>
        </div>

        <div className='flex flex-row-reverse flex-wrap justify-center align-middle items-center gap-16 max550:flex-col'>
          <div className='flex flex-col w-[30%] gap-6 max550:w-[80%]'>
            <h1 className='font-semibold text-[#1B4F4A] text-3xl'>Branded mobile app</h1>
            <p className='font-sans text-[#308078] text-[21px]'>
              Design a personalized app with all the benefits of the ProAgenda booking software.
            </p>
            <Link className='text-[#FC661A] text-[17px] rounded-[10px] border w-fit px-[10%] py-[2.5%] border-[#FC661A] hover:bg-[#FC661A] hover:text-white transition-colors ease-in-out duration-500'>
              Read More
            </Link>
          </div>
          <div className='w-[30%] max550:w-[80%]' ref={animation6Ref}>
            {isAnimation6Visible && <Animation6 />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
