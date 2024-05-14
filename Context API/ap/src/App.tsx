import React, { createContext, useState } from 'react';
import MainPro from './MainPro';
import Button from './Button/Button';

export interface TypeofData {
  id: number;
  name: string;
  pic: string;
}

interface TypeofContext {
  data: TypeofData[];
  setData: (value: any) => void;
  search: string;
  setSearch: (value: string) => void;
  JJ: React.MouseEventHandler<HTMLButtonElement> 
  change:boolean
  update:boolean
  show:boolean
  setGetid:(value:number)=>void
  getID:number
  setUpdate:(value:boolean)=>void
  setChange:(v:boolean)=>void
  setDefault:React.MouseEventHandler<HTMLDivElement>
  del:boolean
  setDel:(value:boolean)=>void

}
export const Get_data = createContext<TypeofContext>({
  data: [],
  setData: () => { },
  search: '',
  setSearch: () => { },
  JJ: () => { },
  change:false,
  update:false,
 show:false,
 setGetid:()=>{},
 getID:0,
 setUpdate:()=>{},
  setChange:()=>{},
  setDefault:()=>{},
  setDel:()=>{},
  del:false

});

const App:React.FC = () => {
  const [data, setData] = useState<TypeofData[]>([
    {
      id: 1,
      name: 'Lisa',
      pic: 'https://media.vanityfair.com/photos/5f8a0436fcee2a89680237c6/1:1/w_1000,h_1000,c_limit/Lisa-Blackpink-MAC-Lede.jpg',
    },
    {
      id: 2,
      name: 'Rose',
      pic: 'https://media.allure.com/photos/64652438707212aba19cdb3c/16:9/w_2560%2Cc_limit/blackpink%2520rose.jpg',
    },
    {
      id: 3,
      name: 'Jennie',
      pic: 'https://images-prod.dazeddigital.com/640/azure/dazed-prod/1300/5/1305418.jpg',
    },
  ]);

  const [search,setSearch]=useState<string>('')
  const [change,setChange]=useState<boolean>(true)
  const [update,setUpdate]=useState<boolean>(false)
  const [show,setShow]=useState<boolean>(false)
  const [getID,setGetid]=useState<number>(0)
  const [del,setDel]=useState<boolean>(false)

  function JJ(){
    setShow(!show)
  }
  function setDefault(){
    setShow(false)
    setChange(true)
    setUpdate(false)
    setGetid(0)
    setDel(false)
  }

  return (
    <div  >
      <Get_data.Provider
       value={{ data, setData, search, setSearch,JJ,
       change,update,show,setGetid,getID,
       setUpdate,setChange,setDefault ,setDel,del }}>
        <MainPro/>
        <Button/>        
      </Get_data.Provider>

    </div>
  );
};

export default App;
