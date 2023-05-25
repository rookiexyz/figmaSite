import React from "react"
import Button from "./Button"
import wholePic from '../images/u1.png'

export default function Hero() {
  return (
    <div className="w-full h-auto bg-site-blue relative">
        <div className="text-right">
            <img className="inline-block" src={wholePic} alt="" />
        </div>
        <div className="2xl:w-[1200px] lg:w-[770px] md:w-[500px] w-[350px] absolute 2xl:top-[150px] lg:top-[96px] md:top-[48px] top-[24px] lg:left-[135px] md:left-[70px] left-[35px]">
            <p className="border-[#fbe8d3ff] 2xl:text-8xl lg:text-6xl md:text-4xl text-2xl leading-[110%] font-work sans font-[700]">
                We <span className="text-site-red">design</span> your feelings, <span  className="text-site-red">code</span> emotions
            </p>
            <p className="border-[#928a97ff] 2xl:text-4xl lg:text-2xl md:text-lg text-sm font-work sans font-[400] 2xl:mt-[48px] md:mt-[24px] mt-[12px] 2xl:mb-[60px] md:mb-[40px] mb-[20px] leading-4">
                We talented people with latest technologies can help you to fulfil your dream.
            </p>
        <Button />
        </div>
    </div>
  )
}
