import React from "react"
import Button from "./Button"
import { RedLine, WhiteLine } from "./Icons"

export default function Content() {
  return (
    <div className="w-full h-auto justify-between bg-site-blue">
        <div className=" w-[770px] h-[491px] pr-[50px] mx-40 my-[5%] box-border">
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
        <div className="w-full h-full justify-center items-center">
            <div className="">
                <WhiteLine />
            </div>
            <div className="">
                <RedLine />
            </div>
        </div>
    </div>
  )
}
