import React, { useState } from 'react';
import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Zod from './Zod';
import Hook from './Hook';

const App = () => {

  return (
  <>
  {
        <BrowserRouter>
        <Routes>
          <Route path='' element={<Zod/>} />
          <Route path='/hook+Zod' element={<Hook/>} />
        </Routes>
        

      </BrowserRouter>
      }
      </>
  );  
};

export default App;
