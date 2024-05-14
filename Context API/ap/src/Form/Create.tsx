import React, { useContext, useState } from 'react';
import { Get_data } from '../App';

const Create = () => {
  const { setData,JJ } = useContext(Get_data);
  const [id, setID] = useState<number>(3);
  const [name, setName] = useState<string>('');
  const [selIMG, setSelIMG] = useState<string|null|ArrayBuffer>(null);

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

  function onChange_Submit() {
    if (name.length < 3) {
      alert('Name must be at least 3 characters long.');
      return;
    }
    setData((prevData: any) => [
      ...prevData,
      {
        id: id+1,
        name: name,
        pic: selIMG, 
      },
    ]);
    setName('')
    setSelIMG(null)
    setID((f)=>f+1)
    JJ()
  }

  return (
    <div>
      <div className='flex flex-col gap-10 justify-center items-center '>
        <div>
          <h1>CREATE </h1>
        </div>
        <div className='flex items-center flex-col gap-5'>
          <input className='pl-5 p-2 w-[200px] ' type="text" placeholder='Title' onChange={(e) => setName(e.target.value)}  />
          <div className='flex'>
          {setSelIMG && <img width={100} src={selIMG?.toString()} /> }                
          <input className='pl-5 p-2 w-[200px] '  type="file"  accept='image/*'  onChange={onChangeIMG} />
          </div>

        </div>
        <button className='p-4 bg-blue-300 w-[100px] ' onClick={onChange_Submit} >Submit</button>
      </div>
    </div>
  );
};

export default Create;
