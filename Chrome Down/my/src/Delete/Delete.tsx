import React, { useState } from 'react';

const Delete = ({ setData, idToDelete,getData, btn_up }: { setData: any; idToDelete: number; getData:any; btn_up:any }) => {

    interface TypeData {
        id: number;
        name: string;
        pic: string;
      }
    const [data2, setData3] = useState<TypeData[]>([])

    const [show_del,setshow_del]=useState<boolean>(false)
  function handleDelete() {
    const newData = getData.filter((p:any) => p.id !== idToDelete);
    console.log(data2);
    setData((prevData: any) => newData);
    setshow_del(false)

    
  }

  return (
    <div>
      <button className={`${btn_up? "block": 'hidden'}  ' p-2 bg-red-400 '`} onClick={()=>setshow_del(!show_del)}>Delect</button>
      {
        show_del&& <div>
           
            <div className='flex flex-col justify-center items-center gap-10 w-[40vh] h-[30vh] absolute left-[40%] top-[30%] bg-slate-300 '>
                 <h1>Do you Want to delete ?</h1>
                 
                 <div className='flex gap-10 ' >
                <button className='p-3 bg-blue-400' onClick={handleDelete}>Yes</button>
                <button className='p-3 bg-red-500' onClick={()=>setshow_del(false)}>No</button>                    
                 </div>


            </div>
        </div>
      }
    </div>
  );
};

export default Delete;
