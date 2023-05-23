import React from "react"
import Button from "./Button"
// import wholePic from '../images/u1.png'
import { RedLine, WhiteLine } from "./Icons"


export default function Content() {
  return (
    <>
        <div className="w-full h-auto bg-site-blue ">
            <div className=" w-[770px] h-[491px] pr-[50px] mx-40 my-[5%] flex flex-row justify-between box-border">
                <div className=" flex flex-col justify-between h-[100%] box-border">
                    <p className="  border-[#fbe8d3ff] text-8xl leading-[110%] font-work sans font-[700]">
                        We <span className="text-site-red">design</span> your feelings, <span  className="text-site-red">code</span> emotions
                    </p>
                    <p className="  border-[#928a97ff] text-2xl leading-6  font-work sans  font-[400]">
                        We talented people with latest technologies can help you to fulfil
                        your dream.
                    </p>
                    <Button />
                </div>
            </div>
        </div>
        <div>
            <WhiteLine />
            <RedLine />
            {/* <img src={wholePic} alt="" /> */}
        </div>
    </>
  )
}
