import React, { useState, useEffect } from 'react';
import { fetchData } from "../../utils/functionFecth";
import { options } from '../../utils/selectionOptions';
import {InputDate} from '../../components/InputDate/InputDate';
import { especific_data } from '../../utils/EspecificRoute';
import { useLocation } from 'react-router-dom';
import './APOD.css'
import Loading from '../../components/Loading/Loading';

const APOD = () => { 
  
  const today =new Date(Date.now()).toISOString().slice(0, 10)
 
  
  const [loading, setLoading] = useState(false);
  
   const location = useLocation().pathname.substring(1)
   const route = especific_data(options, location).especific_route
    const defaultDate = especific_data(options,location).defaultDate
    const [date, setDate] = useState(defaultDate);
    const [photoData, setPhotoData] = useState([]);
    
      useEffect(()=>{ 
      fetchData(date, setLoading, setPhotoData, route )
       
        },[date])
        console.log(photoData)
  return (
    <>
    <div className='input_apod'>
      <p>Siente libre de seleccionar la fecha que desees y ver las fotos de ese dia</p>
      <InputDate value={defaultDate} setDate={setDate}/>
    </div>
    <div className='container_apod'>
        {date <= today && loading  && <Loading/>}
          {date <= today && !loading && photoData !== null &&<>
            <h2>{photoData.title}</h2>
              <div className='image-div_apod'>
                <img src={photoData.hdurl} 
                    alt={photoData.title}
                    className="photo_apod" 
                    style={{ visibility: loading ? 'hidden' : 'visible' }}/>
              </div>
         
            <p>{photoData.explanation}</p>
          </>}
        {date > today && <h2>Seleccione una fecha actual o pasada</h2>}
        {photoData === null && !loading && <h2>Error de conexion con el servidor</h2>}
      </div></>
  )
  }

export default APOD