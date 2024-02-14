import axios from "axios";


export const fetchData = async (date, setLoading, setPhotoData,route)=>{
const NASA_API_KEY = 'AAgbdM2uAcVrxHnP83P9gbsqZiOkNPejL2IzvlCw';
const NASA_URL = "https://api.nasa.gov/";
      setLoading(true)
      if (!date) return;
      try {
        
        const res = await axios.get(`${NASA_URL}${route}date=${date}&api_key=${NASA_API_KEY}`);
        setPhotoData(res.data);
        console.log(res.data)
      } catch (error) {
        setPhotoData(null);
        console.error('Error fetching photo data:', error)
        
      } finally {
        setLoading(false);
        
     
      }
    };
