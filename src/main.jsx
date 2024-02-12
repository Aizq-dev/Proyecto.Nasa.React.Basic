import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'

import APOD from './pages/APOD.jsx'
import Rover from './pages/Rover.jsx'
import NotFound from './pages/404.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      <Route path="/"element={<App />}>
        <Route path='APOD' element={<APOD/>}/>
        <Route path='Rover' element={<Rover/>}/>
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
