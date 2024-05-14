import React, { useContext } from 'react'
import { Get_data } from '../App'
import Create from '../Form/Create'
import Edit from '../Form/Edit'

const Popup = () => {
  const {change,update,show}=useContext(Get_data)
  return (
    <div className={`' absolute translate-x-[-50%] translate-y-[-50%]
     left-[50%] top-[50%] w-[70vh] h-[60vh]
      shadow-xl z-10 bg-red-300 flex-col
       justify-center items-center ${show? ' flex' : ' hidden'}  '`}>

        {change&& <Create/>}
        {update&& <Edit/>}
    </div>
  )
}

export default Popup
