import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <div>
    <div className='' style={{ fontFamily: 'Work Sans, sans-serif' }}>
      <h1 className='text-center text-5xl font-semibold text-[#1B4F4A]'>SkillIt Blogs</h1>
      <p className='text-center'>Explore our latest blogs here.</p>
    </div>
    <div className='flex flex-row flex-wrap  justify-center items-stretch w-[100%] mx-auto gap-4 mt-16'>
      <div className='bg-[#CCDBF6] w-80  px-6 py-10 rounded-2xl'>
        <h1 className='text-3xl font-semibold text-[#1B4F4A]'>How does ProAgenda elevate your Padel court to the next level?</h1>
      </div>
      <div className='bg-[#FAEBD5] w-80  px-6 py-10 rounded-2xl'>
        <h1 className='text-3xl font-semibold text-[#1B4F4A]'>Streamlining operations: implementing golf booking software for your indoor golf simulator        </h1>
      </div>
      <div className='bg-[#DFE3DD] w-80  px-6 py-10 rounded-2xl'>
        <h1 className='text-3xl font-semibold text-[#1B4F4A]'>Simplify your booking process: choosing the right indoor software for your business</h1>
      </div>
      <div className='bg-[#B5DED1] w-80  px-6 py-10 rounded-2xl'>
        <h1 className='text-3xl font-semibold text-[#1B4F4A]'>Optimize your indoor golf venue: simplify with an integrated indoor golf booking system</h1>
      </div>
    </div>
    <Link className=' mt-12 flex justify-center mx-auto text-[#FC661A] text-[17px] rounded-[10px] border w-fit px-[2%] py-[0.8%] border-[#FC661A] hover:bg-[#FC661A] hover:text-white transition-colors ease-in-out duration-500 '>Discover all articles</Link>
    </div>
  )
}

export default Blog
