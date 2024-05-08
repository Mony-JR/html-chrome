import {useState } from "react";


function Header() {
  let count_n=0
  const [count,setcount]=useState<number>(0)

  function count_num(){
    count_n++;
    console.log(count_n);
    
  }
  function count_State(){
    setcount(count+1)
    console.log(count);
    
  }

  return (
    <div className="flex w-full justify-between h-full ">
      <div>
      <button onClick={count_num} className='bg-red-500 p-2'>Click Count</button>
      <h1>{count_n}</h1>
      </div>
      <div>
      <button onClick={count_State} className='bg-red-500 p-2'>Click useState </button>
      <h1>{count}</h1>
      
      </div>
      
    </div>
  )
}

export default Header
