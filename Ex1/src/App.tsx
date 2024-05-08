import './App.css'
import React, { useState } from 'react';

function App() {

  const [items, setItems] = useState(['item1', 'item2', 'item3']);

  const removeItem = () => {
    const updatedItems = items.filter(item => item !== 'item2');
    setItems(updatedItems);
  };

  return (
    <div className='flex justify-center'>
     <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
        <button className='p-2 bg-red-500' onClick={removeItem}>Remove 'item2'</button>
        
      </ul>
    </div>
  );
}



export default App

