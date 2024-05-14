import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Popup from './Popup';
import Delete from '../Delete/Delete';
import { TypeData } from '../App';


export interface TypeData1{
  data:TypeData[]
  up:boolean,
  fil:string,
  setSel:(v:boolean)=>void ,
  j3:number,
  setUp1:boolean,
  setUp2:(v:boolean)=>void
  btn_up1:boolean,
  setbtn_up1:(value:boolean )=>void,
  show1:boolean,
  show2:(value:boolean )=>void,
  toggleModal:()=>void,
  getID:number
  getID1:(v:number)=>void
  setUp12:boolean
  setDate2:any
  show:boolean
  show_up:boolean
  setSel1:(v:boolean)=>void
  setbtn_up:(v:boolean)=>void
}


const Modal = ({ data, up, fil, toggleModal ,setSel, j3, setUp1,btn_up1,setbtn_up1 ,show1,show2 }:TypeData1 ) => {
  const [dat2, setData] = useState<TypeData[]>([]);
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
