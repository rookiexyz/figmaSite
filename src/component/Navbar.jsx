import React from 'react'

const Navbar = () => {
  return (
    <div className='container lg:mx-auto flex justify-between lg:pt-[83px] pt-[50px] lg:pb-[97px] pb-[50px]'>
      <div>
        <a href="#" className='mr-[116px]'>Logo</a>
        <a href="#" className='menu-style capitalize hover:text-site-red transition-all'>Services</a>
        <a href="#" className='menu-style capitalize mx-[48px] hover:text-site-red transition-all'>Team</a>
        <a href="#" className='menu-style capitalize hover:text-site-red transition-all'>Testimonial</a>
      </div>
      <div>
        <a href="#" className='menu-style hover:text-site-red transition-all'>Contact</a>
      </div>
    </div>
  )
}

export default Navbar