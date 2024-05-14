import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Get_data, TypeofData } from '../App'
import Delete from '../Delete/Delete'



const Card = () => {

  const [datafil,setDatafil]=useState<TypeofData[]>([])
  const {search,data,setGetid,getID,setUpdate,setChange,setDefault,setDel}=useContext(Get_data)


  
  useEffect(()=>{
  const Fil_ter=data.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase()))
  setDatafil(Fil_ter)    
  },[search,data])

  function Get_ID(id:number){
    setGetid(id)
    setUpdate(true)
    setChange(false)
    setDel(true)
  }

  return (
    <div onDoubleClick={setDefault} className='flex justify-center items-center flex-col w-full gap-5 mt-10 '>
      {
        datafil.map((p)=>(
          <div key={p.id} onClick={()=>Get_ID(p.id)} 
          className={` ${getID===p.id? 'bg-blue-500': '' } 'bg-white shadow-2xl h-[150px] w-[700px]
           pl-5 pr-5 flex gap-10 items-center '`}>
            <div>
            <img className=' w-[60px] ' src={p.pic} />
            </div>
            <div className='flex overflow-hidden flex-col w-[500px] gap-5'>
            <h1>{p.name}</h1>
            <p>{p.pic}</p>              
            </div>

          </div>
        ))
      }
      <Delete/>
    </div>
  )
}

export default Card;
