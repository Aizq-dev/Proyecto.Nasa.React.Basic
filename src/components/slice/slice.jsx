import React, { useState } from 'react'
import './slice.css'
const Slice = ({data,actualPage, setActualPage}) => {
    
    const totalPages = Math.ceil(data.length / 18)
   
    const handleRest =()=>{
        if (actualPage > 1){
        const result = actualPage -1
        setActualPage(result)}
    }
    const handleSum =()=>{
        if(actualPage < totalPages){
        const result = actualPage +1
        setActualPage(result)}
    }

  return (
  <>
    <button onClick={handleRest}>
        <img src='retroceso.gif'  alt='flecha' className='flechita'/>

        </button>
    <p>{actualPage} / {totalPages}</p>
     <button onClick={handleSum}>
    <img src='avance.gif'  alt='flecha' className='flechita'/>
    </button>
    </>
    );
  
}

export default Slice