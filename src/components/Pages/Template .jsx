import React from 'react'
import ArrowBTN from '../Banner/ArrowBTN'

const Template  = ({src,h1,p}) => {
  return (
    <>
      <div className="md:w-[623px] h-[576px] border-spacing-6 py-16">
        <div className=" mb-6">
        <img src={src} alt="" />
        <h1 className='mt-6 text-[38px] leading-14 font-semibold text-[#282938'>{h1}</h1>
        <p className='mt-3  text-[16px] font-medium leading-7 text-[#282938] opacity-70'>{p}</p>
        </div>
        <ArrowBTN className={" !text-[#282938]"}>View Portfolio</ArrowBTN>
      </div>
    </>
  )
}

export default Template 
