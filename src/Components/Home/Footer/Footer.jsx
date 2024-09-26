import { faFacebook, faFacebookF, faGithub, faInstagram, faSquareInstagram, faSquareTwitter, faSquareWhatsapp, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='px-5' style={{ fontFamily: 'Work Sans, sans-serif' }}>
      
      <div className='flex flex-row gap-2 mt-[12%] items-center'>
      {/* <h1 className='text-center text-5xl font-semibold text-[#1B4F4A] mt-[-0.5%]'>SkillIt : </h1> */}
      <FontAwesomeIcon className='text-2xl  text-[#1B4F4A]' icon={faFacebook} />
      <FontAwesomeIcon className='text-2xl  text-[#1B4F4A]' icon={faSquareInstagram} />
      <FontAwesomeIcon className='text-2xl  text-[#1B4F4A]' icon={faSquareWhatsapp} />
      <FontAwesomeIcon className='text-2xl  text-[#1B4F4A]' icon={faSquareTwitter} />
      <FontAwesomeIcon className='text-2xl  text-[#1B4F4A]' icon={faGithub} />
      </div>
      <hr className='h-[2.1px] mt-6 bg-[#1b4643]'/>
      <div className='mt-5 flex flex-row gap-10 flex-wrap items-stretch max550:flex-col max550:gap-1'>
        <Link to='/' className='text-[#1B4F4A] text-[16px]'>@ Copyrights - SkillIt</Link>
        <Link to='/' className='text-[#1B4F4A] text-[16px]'>Terms and conditions</Link>
        <Link to='/' className='text-[#1B4F4A] text-[16px]'>Privacy policies</Link>
        <Link to='/' className='text-[#1B4F4A] text-[16px]'>About us</Link>
        <Link to='/' className='text-[#1B4F4A] text-[16px]'>Help center</Link>
        <Link to='/' className='text-[#1B4F4A] text-[16px]'>Partners</Link>
      </div>
    </div>
  )
}

export default Footer
