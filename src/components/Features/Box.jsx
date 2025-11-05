import React from 'react'

const Box = ({icon,h1,p}) => {
  return (
    <>
    <div className="w-[480px] h-full hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="p-12 bg-[#FFFFFF]">
        <img className='mt-5 mb-12' src={icon} alt="" />
        <h1 className='mb-3 text-[32px] font-medium leading-9 text-[#282938]'>{h1}</h1>
        <p className='tex-[#282938] opacity-70'>{p}</p>
      </div>
      </div>
    </>
  )
}

export default Box
