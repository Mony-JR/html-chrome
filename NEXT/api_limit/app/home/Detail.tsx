import React from 'react'
import Image from 'next/image'
import { TypeofFetching } from '../FectDATA'


const Detail = ({ name, id, avatar,createAt }: TypeofFetching) => {
  return (
    <div>
       <div className='flex rounded-3xl bg-red-300 justify-center flex-col gap-10 items-center w-[40vh] h-[50vh] '>
      <h1>{name}</h1>
      <div>
        <Image src={avatar} width={200} height={200} alt='My Pic from API' />
      </div>
      <h1>Email is : {createAt}</h1>

    </div>
    </div>
  )
}

export default Detail
