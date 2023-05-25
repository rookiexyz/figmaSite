import React from "react"

export default function Button() {
  return (
    <div className="2xl:w-[220px] md:w-[170px] w-[120px] 2xl:h-[73px] md:h-[53px] h-[35px] flex justify-center items-center box-border bg-site-red rounded-tl-[15px] rounded-br-[15px] hover:bg-[#fff] hover:text-site-red transition-all">
      <p className="border-[#fbe8d3ff] 2xl:text-3xl md:text-xl text-sm font-work sans font-[400] capitalize">
        All work
      </p>
    </div>
  )
}