import React, { useState , useEffect} from 'react'
import {useNavigate, useLocation}  from'react-router-dom';
import { options } from '../../utils/selectionOptions';
import Option from '../Option/Option'
import './SelectApi.css'
const SelectApi = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [selected, setSelected] = useState("APOD")
    useEffect(() => {
      setSelected(location.pathname.substring(1)); //Al recargar la pagina el valor del select no se resetea al defualt
    }, [location]);

    const handleSelectChange = (ev) => {
      setSelected(ev.target.value)
      navigate(`/${ev.target.value}`)}
  return (
    <div className='select'>
    <p>Selecciona para ver imagenes de APOD o del Rover de marte</p>
    <select onChange={handleSelectChange} value={selected}  >
    {options.map((option) => <Option key={option.name} value={option.name}/>)}
            </select>
</div>
  )
}

export default SelectApi