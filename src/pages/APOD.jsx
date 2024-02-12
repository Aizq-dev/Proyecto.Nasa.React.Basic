import React from 'react'
import { useState, useEffect } from 'react';
import axios  from 'axios';
import './APOD.css'

const APOD = () => {
    
    const [photoData, setPhotoData]= useState('')
    const [loading, setLoading] = useState(false);
    const [loadingAPI, setLoadingAPI] = useState(false);
    const NASA_API_KEY = 'AAgbdM2uAcVrxHnP83P9gbsqZiOkNPejL2IzvlCw'
    const NASA_URL = "https://api.nasa.gov/";
    const today =new Date(Date.now()).toISOString().slice(0, 10)
    const [date, setDate] = useState( new Date(Date.now()).toISOString().slice(0, 10))
    
    const handleInput_apod = (e) => {
       
         
        const newDate = e.target.value;
        setDate(newDate);}

        useEffect(()=>{ 
            if (date <= today ){ 
              setLoading(true)
              setLoadingAPI(true)
            const fetchData = async ()=>{
                try{
                    const res = await axios.get(`${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`)
                    setPhotoData(res.data)
                    console.log(res.data)                
                }
                catch(error){
                  <p>No hay fotografia disponible</p>
                    console.error('Error fetching photo data:', error)
                }
               finally {
                setLoading(false);
                setLoadingAPI(false)
              }
            }
      fetchData()
        
        }},[date])
    
  return (
    <>
    <div className='input'>
    <p>Siente libre de seleccionar la fecha que desees y ver las fotos de ese dia</p>
    <input type="date"  onChange={handleInput_apod}/>
    </div>
    <div className='container_apod'>
      {loadingAPI && <p>Loading API data...</p>}
      {date <= today ? (<>
    
    <h2>{photoData.title}</h2>
    <div className='image-div_apod'>
    {loading  && <h3 className='loading'>Loading🙇‍♂️</h3>}
    
    <img src={photoData.hdurl} 
    alt={photoData.title}
     className="photo_apod" 
     style={{ visibility: loading ? 'hidden' : 'visible' }}/>
    </div>
         
    <p>{photoData.explanation}</p>
  </>):(<h2>Seleccione una fecha actual o pasada</h2>)}
  </div></>
  )
  }

export default APOD