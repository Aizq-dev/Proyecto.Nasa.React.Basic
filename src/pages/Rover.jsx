import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rover.css';


const Rover = () => {
  const [photoData, setPhotoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingAPI, setLoadingAPI] = useState(false);
  const NASA_API_KEY = 'AAgbdM2uAcVrxHnP83P9gbsqZiOkNPejL2IzvlCw';
  const NASA_URL = "https://api.nasa.gov/";
  const [date, setDate] = useState('2012-08-06');

  const handleInput_rover = (e) => {
    setLoading(true);
    const newDate = e.target.value;
    setDate(newDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoadingAPI(true)
      if (!date) return;
      try {
        setLoading(true);
        const res = await axios.get(`${NASA_URL}mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_API_KEY}`);
        setPhotoData(res.data.photos);
      } catch (error) {
        console.error('Error fetching photo data:', error);
      } finally {
        setLoading(false);
        setLoadingAPI(false)
      }
    };

    fetchData();
  }, [date]);
console.log(photoData)
  return (
    <>
      <div className='input'>
        {date === '2012-08-06' && <p>Las primeras fotos realizas por el rover son estas con fecha 2012-08-06 </p>}
        <p>Siente libre de seleccionar la fecha que desees y ver las fotos de ese dia</p>
        <input type="date" onChange={handleInput_rover} />
        {photoData.length >0  &&<>
         <p>Los dias en Marte son mas largos que en la Tierra por lo tanto los dias en marte se cuentan por soles </p>
        <p> Sol en marte: {photoData[0].sol}</p>
        </>}
      </div>

      <div className='container_rover'>
        {loadingAPI && <p>Loading API data...</p>}
        {photoData.length > 0? (photoData.slice(0,24).map((photo) => (
          <div key={photo.id}>
            <div className='image-div_rover'>
              {loading && <h4 className='loading'>Loading🙇‍♂️</h4>}
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
        ))):(<h2>No hay datos en la fecha selecionada</h2>)}
      </div>
    </>
  );
};

export default Rover;
