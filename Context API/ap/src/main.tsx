import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import CopoProvide from './kk/CopoProvide.tsx'
import ChildProvide from './kk/ChildProvide.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CopoProvide>
      <ChildProvide/>
    </CopoProvide>
  </React.StrictMode>,
)
