import React,{useContext, useState} from 'react'
import { Get_data } from '../App';

const Edit = () => {
  const {data,setData,getID,JJ}=useContext(Get_data)
  const [id, setID] = useState<number>(4);
  const [name, setName] = useState<string>('');
  const [selIMG, setSelIMG] = useState<string|null|ArrayBuffer>(null);

  function onChange_submit(){
     setData((pre1:any)=>{
      return pre1.map((item:any)=>{
        if(item.id===getID){
          return {...item,name:name,pic:selIMG}
        }
        return item
      })
       
     })
     setName('')
    setSelIMG(null)
    JJ()
    
  }
  function onChangeIMG(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelIMG(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  
  return (
    <div>
      <div className='flex flex-col gap-10 justify-center items-center '>
        <div>
          <h1>UPDATE </h1>
        </div>
        <div className='flex items-center flex-col gap-5'>
          <input className='pl-5 p-2 w-[200px] ' value={name} type="text" placeholder='Title' onChange={(e) => setName(e.target.value)}  />
          <div className='flex'>
          {setSelIMG && <img width={100} src={selIMG?.toString()} /> }                
          <input className='pl-5 p-2 w-[200px] '  type="file"  accept='image/*' onChange={onChangeIMG}  />
          </div>

        </div>
        <button className='p-4 bg-blue-300 w-[100px] ' onClick={onChange_submit}  >Submit</button>
      </div>
    </div>
  )
}

export default Edit
