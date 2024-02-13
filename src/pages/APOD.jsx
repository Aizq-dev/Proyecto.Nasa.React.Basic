import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./APOD.css";
import Input from "../components/Input/Input";

const APOD = () => {
  const [photoData, setPhotoData] = useState("");
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(
    new Date(Date.now()).toISOString().slice(0, 10)
  );
  const NASA_API_KEY = "AAgbdM2uAcVrxHnP83P9gbsqZiOkNPejL2IzvlCw";
  const NASA_URL = "https://api.nasa.gov/";
  const today = new Date(Date.now()).toISOString().slice(0, 10);

  console.log("ME RENDERIZO Y SOY APOD");

  const handleInput_apod = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
  };

  useEffect(() => {
    if (date <= today) {
      setLoading(true);

      const fetchData = async () => {
        try {
          const res = await axios.get(
            `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
          );
          setPhotoData(res.data);
        } catch (error) {
          <p>No hay fotografia disponible</p>;
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [date]);

  return (
    <>
      <div className="input_apod">
        <p>
          Siente libre de seleccionar la fecha que desees y ver las fotos de ese
          dia
        </p>
        <Input funcion={handleInput_apod} defaultValue={today}/>
      </div>
      <div className="container_apod">
        {loading && <img className="loading" src="https://i.gifer.com/ZKZg.gif"/>}
        {date <= today && !loading ? (
          <>
            <h2>{photoData.title}</h2>
            <div className="image-div_apod">
              <img
                src={photoData.hdurl}
                alt={photoData.title}
                className="photo_apod"
                style={{ visibility: loading ? "hidden" : "visible" }}
              />
            </div>

            <p>{photoData.explanation}</p>
          </>
        ) : (
          <h2>Seleccione una fecha actual o pasada</h2>
        )}
      </div>
    </>
  );
};

export default APOD;
