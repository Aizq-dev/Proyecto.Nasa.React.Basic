import React, { useState, useEffect } from 'react';
import { fetchData } from "../../utils/functionFecth";
import { options } from '../../utils/selectionOptions';
import './Rover.css';
import {InputDate} from '../../components/InputDate/InputDate';
import { especific_data } from '../../utils/EspecificRoute';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Slice from '../../components/slice/slice';
const Rover = () => {
 
  
  const [loading, setLoading] = useState(false);
  const [photoData, setPhotoData] = useState([]);
  const today =new Date(Date.now()).toISOString().slice(0, 10)
   const location = useLocation().pathname.substring(1)
   const route = especific_data(options, location).especific_route 
   const defaultDate = especific_data(options,location).defaultDate
   const [actualPage, setActualPage]= useState(1)
   const [date, setDate] = useState(defaultDate);
  const roverData = photoData.photos

   useEffect(() => {
    fetchData(date, setLoading, setPhotoData, route,setActualPage)
    setActualPage(1);
  }, [date]);
     
  
  
  return (
    <>
      <div className='input_rover'>
        {date === '2012-08-06' && <p>Las primeras fotos realizas por el rover son estas con fecha 2012-08-06 </p>}
          <p>Siente libre de seleccionar la fecha que desees y ver las fotos de ese dia</p>
            <InputDate setDate={setDate} value={defaultDate}/>
              {roverData && roverData.length >0  &&<>
              <p>Los dias en Marte son mas largos que en la Tierra por lo tanto los dias en marte se cuentan por soles </p>
            <p> Sol en marte: {roverData[0].sol}</p>
            <div className='slice_div' >
              <Slice data={roverData} actualPage={actualPage} setActualPage={setActualPage}/>
            </div>
        </>}
      </div>
     
      <div className='container_rover'>
         {date <= today && loading  && <Loading/>}
        {date <= today && !loading && roverData && roverData.length > 0 && roverData.slice((actualPage -1) * 18,actualPage *18).map((photo) => (
          <div key={photo.id}>
            <div className='image-div_rover'>
            {date <= today && loading  && <Loading/>}
              <img
                src={photo.img_src}
                alt={photo.id}
                className="photo_rover"
                style={{ visibility: loading ? 'hidden' : 'visible' }}
              />
            </div>
            
            <p>Tipo de camara: {photo.camera.name}</p>
            <p>ROVER: {photo.rover.name}</p>
            <p>Estado: {photo.rover.status}</p>
          </div>
        ))}
        {roverData && roverData.length === 0&& !loading&& <h2>No hay datos en la fecha selecionada</h2>}
        {roverData === null && !loading && <h2>Error de conexion con el servidor</h2>}
       
      </div> 
      
    </>
  );
};

export default Rover;
