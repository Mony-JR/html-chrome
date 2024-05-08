import React, { useState } from 'react';
import Modal from './Modal/Modal';
import Search from './Header/Seach'; // Corrected typo in import statement


interface TypeData {
  id: number;
  name: string;
  pic: string;
}

const App = () => {
  const [up, setUp] = useState(true);
  const [s2, setS2] = useState<string>('');
  const [change1, setChange] = useState<boolean>(true);
  const [btn_up, setBtn_up] = useState<boolean>(false); // Corrected variable name to camelCase
  const [jId1, setJid] = useState<number>(0);
  const [show1, setShow1] = useState(true); // Corrected function name to camelCase
  const [show_up, setShow_up] = useState<boolean>(false);
  const [data, setData] = useState<TypeData[]>([
    {
      id: 1,
      name: 'SongSa',
      pic:"https://i.pinimg.com/474x/54/07/56/540756a2e8733572948e71e5a7f35084.jpg"
    },
    {
      id: 2,
      name: 'SongSa2',
      pic: "https://img.koreatimes.co.kr/upload/thumbnailV2/fe7d70cf38c24b9d8e4689a2f30dacf5.png"
    },
    {
      id: 3,
      name: 'SongSa3',
      pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg/1200px-Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg"
    }
  ]);

  function kk() {
    setUp(!up);
  }

  const toggleModal = () => {
    setUp(!up);
  };

  function update() { // Corrected function name to camelCase
    setChange(false);
  }

  function update2(event: any) {
    setChange(true);
    setJid(0);
    setUp(true);
    setBtn_up(false); // Corrected variable name to camelCase
    setShow1(true); // Corrected function name to camelCase
  }

  return (
    <div onDoubleClick={update2} className='flex flex-col'> {/* Corrected function name to camelCase */}
      <Search s1={setS2} /> {/* Corrected component name to camelCase */}

      <Modal
        data={data}
        up={up}
        fil={s2}
        toggleModal={toggleModal}
        setSel={update} 
        j3={jId1}
        setUp1={setUp}
        btn_up1={btn_up}
        setbtn_up1={setBtn_up} 
        show1={show1}
        show2={setShow1} 
      />
      <div className=' fixed bottom-4 left-3'>
        <button className={`' p-3 bg-blue-500 rounded-xl ${change1? "bg-blue-500" :'bg-red-200' }  '`} onClick={kk}>{change1 ? "Create" : "Update"} </button> {/* Corrected variable name to camelCase */}
      </div>
    </div>
  );
};

export default App;
