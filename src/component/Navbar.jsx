import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  } 

  return (
    <nav className='w-full lg:px-32 md:px-16 px-8 lg:py-8 md:py-6 py-4 font-medium flex items-center justify-between'>
      <div className='w-[20%]'>
        <a href="/" className='2xl:text-4xl mr-[116px]'>Logo</a>
      </div>
      <div className={click ? 'fixed right-0 top-0 pt-[60px] w-[30%] h-[100%] bg-site-blue flex flex-col items-center z-[9]' : 'w-[80%] md:block hidden'}>
        <a href="/" className='2xl:text-4xl menu-style hover:text-site-red transition-all hover:border-b-[3px] border-site-red mb-[20px] mt-[20px]'>Services</a>
        <a href="/" className='2xl:text-4xl menu-style 2xl:mx-[96px] md:mx-[48px] hover:text-site-red transition-all hover:border-b-[3px] border-site-red mb-[20px]'>Team</a>
        <a href="/" className='2xl:text-4xl menu-style hover:text-site-red transition-all hover:border-b-[3px] border-site-red mb-[20px]'>Testimonial</a>
        <a href="/" className='2xl:text-4xl menu-style md:absolute md:right-[8%] hover:text-site-red transition-all hover:border-b-[3px] border-site-red'>Contact</a>
      </div>
      <div className='md:hidden sm:inline-block z-[9]' onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{color: '#f8f8f8'}}/>) : (<FaBars size={30} style={{color: '#f8f8f8'}}/>)}
      </div>
    </nav>
  )
}

export default Navbar