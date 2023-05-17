import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  } 

  return (
    <div className='container mx-auto flex justify-between lg:pt-[83px] pt-[50px] lg:pb-[97px] pb-[50px]'>
      <div className='w-[20%]'>
        <a href="/" className='mr-[116px]'>Logo</a>
      </div>
      <div className='w-[80%]'>
        <a href="/" className='menu-style hover:text-site-red transition-all'>Services</a>
        <a href="/" className='menu-style mx-[48px] hover:text-site-red transition-all'>Team</a>
        <a href="/" className='menu-style hover:text-site-red transition-all'>Testimonial</a>
        <a href="/" className='menu-style ml-[55%] hover:text-site-red transition-all'>Contact</a>
      </div>
      <div className='hidden' onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{color: '#f8f8f8'}}/>) : (<FaBars size={30} style={{color: '#f8f8f8'}}/>)}
      </div>
    </div>
  )
}

export default Navbar