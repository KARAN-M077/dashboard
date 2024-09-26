import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';



function Studentseditdetails() {

  return (

    <>

      <div className='bg-gray-100  pb-5 px-16 h-fit flex flex-col gap-16 mx-auto align-middle items-center w-full max550:px-5' style={{ fontFamily: 'Work Sans, sans-serif' }}>

        <div className='text-black gap-8 flex flex-col justify-center w-[70%] max550:w-full'>

          <h1 className='text-5xl font-semibold text-center text-[#383838] mt-5'>Fill your details</h1>

          <div className='flex flex-row justify-between'>

            <div className='flex flex-col w-[48%] gap-6'>

              <input

                placeholder='Enter LinkedIn Profile URL'

                type='text'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter LeetCode Profile URL'

                type='text'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter Portfolio URL'

                type='text'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter GitHub Profile URL'

                type='text'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

            </div>



            <div className='flex flex-col w-[48%] gap-6'>

              <textarea

                placeholder='Tell us about yourself'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

                rows='4'

              />

              <input

                placeholder='Enter Department (e.g. IT)'

                type='text'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter Batch ID (e.g. 2025)'

                type='number'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

            </div>

          </div>



          <div className='flex flex-row justify-between'>

            <div className='flex flex-col w-[48%] gap-6'>

              <h3 className='text-xl font-semibold'>10th Grade</h3>

              <input

                placeholder='Enter 10th Grade Institution'

                type='text'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter year of completion of 10th'

                type='number'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter mark percentage of 10th'

                type='number'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter your grade in 10th'

                type='text'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

            </div>



            <div className='flex flex-col w-[48%] gap-6'>

              <h3 className='text-xl font-semibold'>12th Grade</h3>

              <input

                placeholder='Enter 12th Grade Institution'

                type='text'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter year of completion of 12th'

                type='number'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter mark percentage of 12th'

                type='number'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter your grade in 12th'

                type='text'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

            </div>

          </div>



          <div className='flex flex-row justify-between'>

            <div className='flex flex-col w-[48%] gap-6'>

              <h3 className='text-xl font-semibold'>College Details</h3>

              <input

                placeholder='Enter College Name'

                type='text'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter your degree'

                type='text'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='Enter degree completion year'

                type='number'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='CGPA (e.g. 6.5)'

                type='number'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

            </div>



            <div className='flex flex-col w-[48%] gap-6'>

              <h3 className='text-xl font-semibold'>Placement</h3>

              <input

                placeholder='History of Arrears'

                type='number'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <input

                placeholder='No. of Current Arrears'

                type='number'

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 py-[9px]'

              />

              <select

                className='bg-transparent border border-slate-400 rounded-[5px] px-4 pr-4 py-[9px]'

              >

                <option value=''>Are you willing for placement?</option>

                <option value={true}>Yes</option>

                <option value={false}>No</option>

              </select>

            </div>

          </div>



          <div className='flex justify-center mx-auto w-[90%] max550:w-full max550:px-5'>

            <Link to='/dashboard/studentdetails' className='text-center text-white bg-[#FC661A] rounded-[5px] py-[10px] w-full active:bg-[#D94F12] transition duration-150 ease-in-out text-[18px]'>

              Update

            </Link>

          </div>



          {/* {error && <p className='text-red-500 text-center mt-4'>{error}</p>} */}

        </div>

      </div>

    </>

  );

}



export default Studentseditdetails;

