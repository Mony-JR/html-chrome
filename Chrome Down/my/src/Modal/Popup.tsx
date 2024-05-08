import React, { useState } from 'react';
import Edit from '../Edit/Edit';

interface TypeData {
  id: number;
  name: string;
  pic: string;

}

const Popup = ({ data, setDate2 ,setUp1,toggleModal,show, setUp12,getID1, show_up }:
   { data: TypeData, setDate2: any; setUp1:any; toggleModal:any; show:any; setUp12:any; getID1:any; show_up:any }) => {

  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
  const [id, setID] = useState<number>(3);
  const [name, setName] = useState<string>('');
  const [up1,setUp]=useState<boolean>(false)

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };



  const handleCreate = () => {
    console.log(id);
    
    setDate2((prevData: any) => [
      ...prevData,
      {
        id:id +1,
        name: name,
        pic: selectedImage
      }
    ]);
    setName('');
    setSelectedImage('');
    setID(id+1)
    toggleModal()
  };
  
  console.log("show" + show);
  console.log(setUp1);
  

  return (
    <div className='flex justify-center items-center'>
      {
        show &&<div className={` fixed items-center justify-center top-[30%] gap-3 w-[60vh] h-[50vh] bg-slate-300 flex-col
     ${setUp1 ? "hidden" :'flex' }  ` }>

      <h1 className='p-2 bg-blue-500 mt-4 rounded-xl'>CREATE Product</h1>
      <input className='mt-4' type="text" placeholder='Name' name="name" onChange={handleNameChange} value={name} />
      <input className='mt-4' type="file" accept="image/*" onChange={handleFileInputChange} />

      {selectedImage && <img width={150} src={selectedImage.toString()} alt="Selected" />}

      <button className='p-2  mt-3 bg-amber-600' onClick={handleCreate} >Create</button>
    </div>
      }
      {
        !show&&<Edit setData2={setDate2} setUp={setUp1} setUp12={setUp12} getID1={getID1} />
      }
    
    </div>
  );
};

export default Popup;
