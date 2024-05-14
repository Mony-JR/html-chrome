import React, { useState } from 'react'
import { FaChrome } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";


const Seach = ({s1}:{s1:string}) => {
    
  return (

    <div className='w-full flex justify-between items-center bg-gray-300 h-10 '>
      <div className='flex pl-5 gap-5 items-center'>
        <span><FaChrome /></span>
        <h3>Downloads</h3>
      </div>
      <div className='w-full flex flex-row justify-center items-center relative  '>
        <span className=' absolute left-[21%] '><IoIosSearch /></span>
         <input className=' border-none outline-none w-[60%] rounded-lg pl-10 ' type='search' placeholder='search downloads ' onChange={e=>s1(e.target.value)} />
      </div>

      <span className='mr-4 text-xl '><CiMenuKebab /></span>
    </div>
  )
}

export default Seach
