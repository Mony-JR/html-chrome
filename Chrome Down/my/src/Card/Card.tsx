import React, { useState, useEffect } from 'react';

const Card = ({ data, fil,setSel1,j3, show2,getID1, setbtn_up }:
   { data: any[]; fil: string; setSel1:any; j3:any; show2:any; getID1:any; setbtn_up:any  }) => {
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [j, j2] = useState<number>(0);
  const [k1,k2]=useState<boolean>(false)

  useEffect(() => {
    const filtered = data.filter((item: any) =>
      item.name.toLowerCase().includes(fil.toLowerCase())
    );
    setFilteredData(filtered);
    j2(j3)

  }, [data, fil]);

  function getID(id: number) {

    j2(id);
    setSel1(false)
    show2(false)
    getID1(id)
    setbtn_up(true)

  }

  function Duc(id:number){
    j2(0)
    setSel1(false)
  }
  
  return (
    <div className='flex flex-col gap-5 mt-10 w-[60%] h-full'>
      
      {filteredData.map((p: any) => (
        <div onDoubleClick={()=>Duc(p.id)}
          onClick={() => getID(p.id)}
          className={` ${j === p.id ? 'bg-blue-400 ' : 'bg-gray-400'} flex items-center gap-10  shadow-2xl h-[150px] `}
          key={p.id}
        >
         
          <img width={100} src={p.pic} alt='' />
          <div className='flex flex-col justify-center gap-10 h-full '>
          <h1>{p.name}</h1>
          <p>https://encrypted-tbn0.gstatic.com</p>
          </div>
        
        </div>
      ))}
       <p>today</p>
    </div>
  );
};

export default Card;
