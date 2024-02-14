import React from 'react'
import SelectApi from '../SelectApi/SelectApi'
import './Header.css'
const Header = () => {
    
    
  return (
    <>
    <header className='header'>
       <div className='welcome'>
            <img src='NASA_logo.svg.png'className='nasa-icon'/>
            <h1>Bienvenido a la foto diaria de la Nasa</h1>
             <SelectApi/>
        </div>
    </header>
        </>
  )
}

export default Header