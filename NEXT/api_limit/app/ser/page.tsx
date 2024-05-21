import React from 'react'
import { Show_more } from '../../utils/FetchData'
import MapDATA from '../home/ListUsers'
import Link from 'next/link'


const page = async({searchParams}:{searchParams:{limit:string}}) => {

    const currentLimut=parseInt(searchParams.limit)
    const data:any=await Show_more(1,currentLimut||"5", 10)
    
  return (
    <div>
      {data.map((p)=>(
        <div>
            <MapDATA  id={p.id} name={p.name} createAt={p.createAt} avatar={p.avatar}/>
        </div>
      ))}
     
    </div>
  )
}

export default page
