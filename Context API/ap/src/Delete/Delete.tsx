import React, { useContext, useState } from 'react'
import { Get_data } from '../App'


const Delete = () => {

    const { del, setDel,data,setData,getID,setUpdate,setChange } = useContext(Get_data)
    const [show_del,setShow_del]=useState<boolean>(false)

    function onChange_Delete(){
        const newData=data.filter((p:any)=>p.id!==getID)
        setShow_del(false)
        console.log(newData);
        setData(newData) 
        setDel(false)
        setUpdate(false)
        setChange(true)

        
    }

    return (
        <div> {del&&

            <div>
                {show_del&&
                  <div className=' bg-gray-400 flex absolute translate-x-[-50%] translate-y-[-50%] left-[50%] top-[50%] flex-col w-[50vh] pt-5 pb-5 justify-center items-center gap-5'>
                    <h1 className='text-2xl'>Are You want to delete ?</h1>
                    <div className='flex gap-10'>
                        <button onClick={onChange_Delete} className='p-4 bg-red-400 w-[100px] rounded-xl '>Yes</button>
                        <button onClick={()=>setShow_del(!show_del)}  className='p-4 bg-red-400 w-[100px] rounded-xl '>No</button>
                    </div>
                </div>  
                }
                


                <button onClick={()=>setShow_del(!show_del)} className='p-3 bg-red-400 w-[100px] rounded-xl '>Delete</button>
            </div>
        }
        </div>
    )
}

export default Delete
