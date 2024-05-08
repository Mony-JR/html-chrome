import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Popup from './Popup';
import Delete from '../Delete/Delete';

const Modal = ({ data, up, fil, toggleModal ,setSel, j3, setUp1,btn_up1,setbtn_up1 ,show1,show2 }: 
  { data: any; up: boolean; fil: any; toggleModal: () => void; setSel:any; 
    j3:any; setUp1:any; btn_up1:any; setbtn_up1:any; show1:any; show2:any
  
  }) => {
  const [dat2, setData] = useState<any>([]);
  const [sel,SetSel1]=useState<boolean>(false)
  const [getId,setgetID]=useState<number>(0)

  useEffect(() => {
    setData(data);
  }, [data,sel]);
  console.log(sel);

  function workShow(){
    show2(!show1)
    alert()
  }
  console.log("GetID"+getId);
  

  return (
    <div className='flex flex-col items-center justify-center gap-5'>

      <Card data={dat2} fil={fil} setSel1={setSel} j3={j3} show2={show2} getID1={setgetID} setbtn_up={setbtn_up1}  />
      <Popup data={dat2} setDate2={setData} setUp1={up} toggleModal={toggleModal} show={show1} setUp12={setUp1} getID1={getId}  />
      {sel&& <h1>Hello Modal</h1>}

      <Delete getData={dat2}  setData={setData} idToDelete={getId} btn_up={btn_up1} />
    </div>
  );
};

export default Modal;
