import React, { useState } from 'react'

const Seach = ({s1}:{s1:string} ,onchange:(value:string)=> void) => {

    const [data2,setData]=useState<any>([])
    

  return (

    <div className='w-full flex justify-center items-center bg-gray-300 h-10 '>
      <input type='search' placeholder='seaching ' onChange={e=>s1(e.target.value)} />
    </div>
  )
}

export default Seach
