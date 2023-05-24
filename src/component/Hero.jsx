import React from "react"
import Button from "./Button"
import wholePic from '../images/u1.png'
// import { RedLine, WhiteLine } from "./Icons"


export default function Hero() {
  return (
<<<<<<< HEAD
    <div className="w-full h-auto bg-site-blue relative">
        <div>
            <img src={wholePic} alt="" />
            <div className="lg:w-[770px] md:w-[500px] w-[350px] absolute lg:top-[96px] md:top-[48px] top-[24px] lg:left-[135px] md:left-[70px] left-[35px]">
            {/* <div className=" flex flex-col justify-between h-[100%] box-border"> */}
                <p className="border-[#fbe8d3ff] lg:text-6xl md:text-4xl text-2xl leading-[110%] font-work sans font-[700]">
                    We <span className="text-site-red">design</span> your feelings, <span  className="text-site-red">code</span> emotions
                </p>
                <p className="border-[#928a97ff] lg:text-2xl md:text-lg text-sm font-work sans font-[400] md:mt-[24px] mt-[12px] md:mb-[40px] mb-[20px] leading-4">
                    We talented people with latest technologies can help you to fulfil
                    your dream.
                </p>
                <Button />
            {/* </div> */}
=======
        <div className="w-full h-auto bg-site-blue relative">
            <div>
                <img src={wholePic} alt="" />
                <div className="lg:w-[770px] md:w-[500px] w-[350px] absolute lg:top-[96px] md:top-[48px] top-[24px] lg:left-[135px] md:left-[70px] left-[35px]">
                {/* <div className=" flex flex-col justify-between h-[100%] box-border"> */}
                    <p className="border-[#fbe8d3ff] lg:text-8xl md:text-4xl text-2xl leading-[110%] font-work sans font-[700]">
                        We <span className="text-site-red">design</span> your feelings, <span  className="text-site-red">code</span> emotions
                    </p>
                    <p className="border-[#928a97ff] lg:text-2xl md:text-lg text-sm font-work sans font-[400] md:mt-[24px] mt-[12px] md:mb-[40px] mb-[20px] leading-4">
                        We talented people with latest technologies can help you to fulfil
                        your dream.
                    </p>
                    <Button />
                {/* </div> */}
                </div>
>>>>>>> 0c6bafcb1c43713f446b24ca4400dba9e5e7ee69
            </div>
        </div>
  )
}
