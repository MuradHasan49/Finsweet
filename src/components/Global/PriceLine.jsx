import React from 'react'
import Pointer from '../../assets/AboutUs/Pointer.png'

const PriceLine = ({className,text}) => {
  return (
    <>
      <div className="flex gap-4">
        <img className={className} src={Pointer} alt="" />
        <p className={`text-[16px] leading-7 text-[#282938] ${className} `}>{text}</p>
      </div>
    </>
  )
}

export default PriceLine
