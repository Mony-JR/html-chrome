import React, { useState } from 'react';
import Modal from './Modal/Modal';
import Search from './Header/Seach'; 

 
export interface TypeData {
  id: number;
  name: string;
  pic: string;
}

const App = () => {
  const [up, setUp] = useState(true);
  const [s2, setS2] = useState<string>('');
  const [change1, setChange] = useState<boolean>(true);
  const [btn_up, setBtn_up] = useState<boolean>(false); 
  const [jId1, setJid] = useState<number>(0);
  const [show1, setShow1] = useState(true); 
  const [show_up, setShow_up] = useState<boolean>(false);
  const [data, setData] = useState<TypeData[]>([
    {
      id: 1,
      name: 'lisa',
      pic:"https://media.vanityfair.com/photos/5f8a0436fcee2a89680237c6/1:1/w_1000,h_1000,c_limit/Lisa-Blackpink-MAC-Lede.jpg"
    },
    {
      id: 2,
      name: 'rose',
      pic: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Blackpink_Ros%C3%A9_Rimowa_1.jpg"
    },
    {
      id: 3,
      name: 'jennie',
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg/1200px-Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg"
    }
  ]);

  function kk() {
    setUp(!up);
  }

  const toggleModal = () => {
    setUp(!up);
  };

  function update() { 
    setChange(false);
  }

  function update2(event: any) {
    setChange(true);
    setJid(0);
    setUp(true);
    setBtn_up(false); 
    setShow1(true); 
  }

  return (
    <div onDoubleClick={update2} className='flex flex-col'> 
      <Search s1={setS2} /> 

      <Modal data={data} up={up} fil={s2} toggleModal={toggleModal} setSel={update} j3={jId1} setUp1={setUp} btn_up1={btn_up} setbtn_up1={setBtn_up} show1={show1} show2={setShow1} 
      />
      <div className=' fixed bottom-4 left-3'>
        <button className={`' p-3 bg-blue-500 rounded-xl  ${change1? "bg-blue-500" :'bg-red-200' }  '`} onClick={kk}>{change1 ? "Create" : "Update"} </button> {/* Corrected variable name to camelCase */}
      </div>
    </div>
  );
};

export default App;
