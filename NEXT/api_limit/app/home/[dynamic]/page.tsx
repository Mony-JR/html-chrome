
import { Dynamic_Route } from '@/utils/FetchData'
import React from 'react'
import Link from 'next/link';
import Detail from '../Detail';

const page = async ({ params }: any) => {
  const newData = await Dynamic_Route(params.dynamic);
  return (
    <div className='flex w-full h-[100vh] justify-center items-center flex-col '>
      <Detail name={newData?.name} createAt={newData.createdAt} id={newData.id} avatar={newData?.avatar} />
      <Link href={"../"}><button className='p-3 bg-red-400'>Click Back</button></Link>
    </div>
  )
}

export default page
