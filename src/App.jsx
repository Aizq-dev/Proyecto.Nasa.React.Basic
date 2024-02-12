import { useNavigate,  useLocation, Outlet} from'react-router-dom';
import { useState ,useEffect} from 'react';


import './App.css'



function App() {

  const navigate = useNavigate()
  const location = useLocation();
  const defaultOption = location.pathname.substring(1) || 'APOD';

  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelectChange = (ev) => {
    setSelectedOption(ev.target.value);
    navigate(`/${ev.target.value}`)}
  
    useEffect(() => {
      setSelectedOption(location.pathname.substring(1)); // Actualizamos selectedOption al cambiar la URL
    }, [location]);
  
 

  return  (
    <div className='APP'>
     <header className='header'>
        <div className='welcome'>
         <img src='NASA_logo.svg.png'className='nasa-icon'/>
         <h1>Bienvenido a la foto diaria de la Nasa</h1>
         <div className='select'>
          <p>Selecciona para ver imagenes de APOD o del Rover de marte</p>
         <select value={selectedOption}  onChange={handleSelectChange} >
          <option key='APOD'value='APOD'>APOD</option>
          <option key='Rover' value='Rover' >Rover</option>

        </select>
        </div> 
       </div>
    </header>
    <main className='Main'>
    
        <div className='outlet'><Outlet/></div> 
        </main>
  

 </div>
 
 )
}

export default App
