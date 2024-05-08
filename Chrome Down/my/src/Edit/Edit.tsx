import React, { useState } from 'react';

const Edit = ({ setData2, setUp,setUp12,getID1 }: { setData2: any; setUp:any; setUp12:any; getID1:any }) => {
  const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
  const [name, setName] = useState<string>('');

  const [getID,SetgetID]=useState<number>(0)
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

  const handleCreate = () => {
    const updatedData = setData2((prevData: any[]) => {
      return prevData.map((item: any) => {
        if (item.id === getID1) {
          return {
            ...item,
            name: name,
            pic: selectedImage
          };
        }
        return item;
      });
    });
    
    setName('');
    setSelectedImage(null);
    setUp12(true)
    alert('Data updated successfully');
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div className={` ${setUp? 'hidden' :'flex'} fixed items-center 
      justify-center top-[30%] gap-3 w-[60vh] h-[50vh] bg-slate-300 flex-col left-[30%]  `}>
        <h1 className='p-2 bg-blue-500 mt-4 rounded-xl'>Update</h1>
        <input className='mt-4' type="text" placeholder='Name' name="name" onChange={handleNameChange} value={name} />
        <input className='mt-4' type="file" accept="image/*" onChange={handleFileInputChange} />

        {selectedImage && <img width={200} src={selectedImage.toString()} alt="Selected" />}

        <button className='p-2 mt-3 bg-amber-600' onClick={handleCreate}>Update</button>
      </div>
    </div>
  );
};

export default Edit;
