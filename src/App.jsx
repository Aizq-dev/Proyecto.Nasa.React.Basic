import {Outlet} from'react-router-dom';

import './App.css'
import Header from './components/Header/Header';



function App() {

 
 
 
  return  (
    <div className='APP'>
         <Header />
          <main className='Main'>
            <div className='outlet'>
              <Outlet/>
            </div> 
          </main>
    </div>
 
 )
}

export default App
