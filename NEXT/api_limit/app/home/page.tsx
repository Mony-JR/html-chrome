'use client'

import React, { useEffect, useState } from 'react';
import { Show_more, TypeofFetching } from '../FectDATA';
import MapDATA from './MapDATA';
import { MdOutlineReadMore } from "react-icons/md";


const Page = () => {
  const [limit,setLimit]=useState<number>(5)
  const [data, setData] = useState<TypeofFetching|undefined>();

  console.log(data);

  useEffect(()=>{
    async function getData(){
      const apiData=await Show_more(1,limit)
      setData(apiData)
    }
    getData()
  },[limit])
  


  return (
    <div className='flex justify-center items-center flex-wrap '>
      {data?.map((item:any) => (
        <div key={item.id}>
          <MapDATA name={item?.name} id={item?.id} avatar={item.avatar} />
        </div>
      ))}
      <button onClick={()=>setLimit(limit+5)}
      className='text-5xl'><MdOutlineReadMore /></button>
    </div>
  );
};

export default Page;
